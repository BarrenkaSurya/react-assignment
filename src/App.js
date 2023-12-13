import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './Todolist';


function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodo(newTodos)
    setTask("");
  }

  const deleteHandler = ((indexValue) => {
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodo(newTodos);
  })
  return (
    <div className="App">
      <center>
        <div>
          <div>
            <h4>TODO LIST</h4>
            <form onSubmit={submithandler}>
          <input type='text' placeholder='Typehere' name='task' value={task} onChange={(e) => {
              setTask(e.target.value);
          }}/>
        <input type='submit' value="Add" name='Add'/>
        </form>
        <Todolist todolist={todos} deleteHandler={deleteHandler}/> 
          </div>
        </div>
        
        
      </center>
    </div>
  );
}

export default App;
