import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  return (
    <div className="app">
      <Header />
      <AddTask 
        placeholder="new task..."
      />
      <Task />
    </div>
  );
}

export default App;
