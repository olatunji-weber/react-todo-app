// import {useState} from 'react';
import { useState } from 'react';
import './App.css';

let num1 = 500;
let num2 = 600

function App() {
  const [todos, setTodos] = useState(["Play Violin", "Practice Coding", "Take an Online Class"]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Coder Republik</h1>
        <p>Programming is the superpower of the 21st Century....</p>
        <input id='todo' name='todo' />
        <button>Add Todo</button>
        <hr />
        <ul>
          {todos.map((todo)=>(
            <li>{todo}</li>
          ))}          
        </ul>
      </header>
    </div>
  );
}

export default App;
