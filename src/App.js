import React from 'react'
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './components/Task';
import taskModule from './taskModule';

const App = () => {
  const [items, setItems] = React.useState([]);
  
  
  const handleData = (dataFromDb) => {
    const newdata = Object.values(dataFromDb);
    setItems(newdata)
  
  }

  
  React.useEffect(() => {
    taskModule.getTask(handleData);
    
  }, []);

  
  const handleAddNewItem = (value) => {
    const newItems = [...items, {task: value}]
    setItems(newItems)
    taskModule.saveNewTask(value)
    
  }

 

  return (
    <div className="app">
      <Header />
      <AddTask 
        placeholder="new task..."
        addToDo={handleAddNewItem}
        
      />
      <Task 
      items={items}
      
      />
    </div>
  );
}

export default App;
