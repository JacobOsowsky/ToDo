import React from 'react';

const Task = (props) => {
    return ( 
        <div className="task">
            <p>
                <strong>{props.text}</strong>
                <span> - do {props.date} </span>
                <button onClick={()=>props.done(props.id)}>Wykonane</button>
                <button onClick={()=>props.delete(props.id)}>X</button>
            </p>
        </div>
     );
}
 
export default Task;