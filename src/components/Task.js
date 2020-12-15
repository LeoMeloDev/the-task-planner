import React from 'react'
import '../App.css'


const Task = (props) => {

    return (
        <div className="task">
            <ul>
               {props.items.map(
                   item => 
                   <li key={item.task}>{item.task}
                    <span>
                    <button >todo</button>
                    <button className="yellow">doing</button>
                    <button className="green">done</button>
                    </span>
                   </li>
                )}
            
            </ul>
        </div>
    )
}

export default Task