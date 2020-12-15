import React from 'react'

const Task = () => {
    return (
        <div className="task">
            <ul>
               <li>Read
                <span>
                    <button className="red">todo</button>
                    <button className="yellow">doing</button>
                    <button className="green">done</button>
                </span>
               </li> 
            </ul>
        </div>
    )
}

export default Task