
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
//Here App is React Component. Component takes in parameters
//called props
const App=()=> {
  /*We want to use these in other components
  that is why these were declared in App.js
  which is a global component*/
  const [showAddTask, setShowAddTask]=useState(false)

  const [tasks, setTasks]=useState(
    [{
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }]
)

//Add Task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id, ...task}
  setTasks([... tasks, newTask])
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, reminder: 
    !task.reminder }: task
    )
  )
}

//Delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
//onDelete is a prop of Tasks

  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)}></Header>
      {showAddTask && <AddTask onAdd={addTask}>
      </AddTask>}
      {tasks.length>0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}>
      </Tasks> : 'No Tasks to show'}
    </div>
    
  )
}


export default App;
