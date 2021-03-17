import Task from './Task'

/* map() will create a list. map 
        func takes another function inside 
        it*/
/*state is immutable. we cannot use 
tasks.push()*/
const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <div>
            {tasks.map((task)=>(
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}>
                </Task>
                ))}
        </div>
    )
}
export default Tasks
