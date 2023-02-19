// import {useState} from 'react';
import { useState } from 'react';
import './App.css';

let num1 = 500;
let num2 = 600

function App() {
  const [todos, setTodos] = useState(["Really Cool Stuff....", "Play Violin", "Practice Coding", "Take an Online Class"]);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Coder Republik</h1>
        <p>Programming is the superpower of the 21st Century....</p>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
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
