import React from 'react'


const AddTask = (props) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (event) => setInputValue(event.target.value);
    const handleAddTask = () => {
        props.addToDo(inputValue)
        setInputValue('')
    }    
    return (
        <div className="add__task">
            <input type="text" value={inputValue} placeholder={props.placeholder} onChange={ handleChange }/>
            <button onClick={handleAddTask}>add task</button>
        </div>
        
    )
}

export default AddTask;