import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="app">
      <Header />
      <AddTask 
        placeholder="new task..."
      />
    </div>
  );
}

export default App;
