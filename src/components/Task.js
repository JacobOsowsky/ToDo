import React from 'react';

const Task = (props) => {
    const style = {
        color: "gold"
    }
    const important = props.important
    if(props.active){
    return ( 
        <div className="task">
            <p>
                <strong style = {important ? style : null}>{props.text}</strong>
                <span> - do {props.date} </span>
                <button className="complete" onClick={()=>props.done(props.id)}>Wykonane</button>
                <button className="delete" onClick={()=>props.delete(props.id)}>X</button>
            </p>
        </div>
     );} else { 
         const getDate = new Date(props.finish).toLocaleString()
         return (
        <div className="task">
        <p>
            <strong>{props.text}</strong>
            <em> (Zrobić do {props.date}) </em>
            <span> - wykonano: {getDate}</span>
            <button className="delete" onClick={()=>props.delete(props.id)}>X</button>
        </p>
    </div>
     )}
}
 
export default Task;