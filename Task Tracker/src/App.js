
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
const App=()=> {
  /*We want to use these in other components
  that is why these were declared in App.js
  which is a global component*/
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
  return (
    <div className='container'>
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
    
  )
}


export default App;
