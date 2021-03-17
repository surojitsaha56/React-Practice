import Task from './Task'

/* map() will create a list. map 
        func takes another function inside 
        it*/
/*state is immutable. we cannot use 
tasks.push()*/
const Tasks = ({tasks}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} task={task}>
                </Task>
                ))}
        </div>
    )
}
export default Tasks
