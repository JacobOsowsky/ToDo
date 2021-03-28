import React from 'react';
import Task from './Task'

const TaskList = (props) => {
const active = props.tasks.filter(task=>task.active);
const done = props.tasks.filter(task=>!task.active);

active.sort((a,b) => {
    if(a.text>b.text) return 1;
    if(a.text<b.text) return -1;
    return 0
})
done.sort((a,b) => b.finishDate - a.finishDate)

    const activeTasks = active.map(task=>
    <Task 
    key={task.id} 
    text={task.text} 
    date={task.date} 
    done={props.done} 
    delete={props.delete} 
    id={task.id} 
    important={task.important} 
    active={task.active}
    finish={task.finishDate}
    />)
    const doneTasks = done.map(task=>
        <Task 
        key={task.id} 
        text={task.text} 
        date={task.date} 
        done={props.done} 
        delete={props.delete} 
        id={task.id} 
        important={task.important} 
        active={task.active}
        finish={task.finishDate}
        />)
    return ( 
        <>
            <div className="todo">
                <h3>Zadania do zrobienia</h3>
                {activeTasks}
            </div>

            <div className="done">
                <h4>Zadania zrobione ({doneTasks.length})</h4>
                {doneTasks.length > 5 && <span>Wyświetlono 5 ostatnich zadań</span>}
                {doneTasks.slice(0,5)}
            </div>
        </>
     );
}
 
export default TaskList;