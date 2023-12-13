import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './Todolist';


function App() {
  const [task, settask] = useState("");
  const [todos, setTodo] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const newtodos = [...todos,task];
    setTodo(newtodos)
    settask("");
  }
  return (
    <div className="App">
      <center>
        <div>
          <div>
            <h4>TODO LIST</h4>
            <form onSubmit={submithandler}>
          <input type='text' placeholder='Typehere' value={task} onChange={(e) => {
              settask(e.target.value);
          }}/>
        <input type='submit' value="Add" name='Add'/>
        </form>
        <Todolist todolist={todos} /> 
          </div>
        </div>
        
        
      </center>
    </div>
  );
}

export default App;
