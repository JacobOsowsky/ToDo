import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    const tasks = props.tasks.map(task=>
    <Task key={task.id} text={task.text} date={task.date} done={props.done} delete={props.delete} id={task.id}/>)
    return ( 
        <>
            <div className="todo">
                <h3>Zadania do zrobienia</h3>
                {tasks}
            </div>

            <div className="done">
                <h4>Zadania zrobione</h4>
                
            </div>
        </>
     );
}
 
export default TaskList;