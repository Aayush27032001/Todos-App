import React, { useEffect, useState } from 'react';
import Navbar from './Components/UI/Navbar';
import Todos from './Components/UI/Todos';
import './App.scss';

const App = () => {

  const getLocalItems = () => {
    if (localStorage.getItem('todosList')) {
      return JSON.parse(localStorage.getItem('todosList'));
    }
    else {
      return ([])
    }
  }

  const [todos, setTodos] = useState(getLocalItems());

  const submitHandler = () => {
    let input;
    if (document.getElementById("input-task").value) {
      input = [
        ...todos,
        {
          content: document.getElementById("input-task").value
        }
      ]
      setTodos(input);
    }
    document.getElementById("input-task").value = "";
  }

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="input-task" placeholder="Type your Todays Task" aria-describedby="button-addon2" />
          <button class="btn" onClick={submitHandler} type="button" id="button-add">Add Task</button>
        </div>
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
