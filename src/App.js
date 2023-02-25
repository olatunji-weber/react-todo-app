import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import Todos from './Todos';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  //When the app loads, we need to listen to the database and fetch new todos as they get added/removed...
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(docs => docs.data().todo))
    })
  });

  const addTodo = (event) => {
    event.preventDefault()  //This will prevent the default behavious so that the app doesn't keep refreshing all the time.
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Coder Republik</h1>
        <p>Programming is the superpower of the 21st Century....</p>

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
          <Button disabled={!input} variant="contained" onClick={addTodo}>Add Todo</Button>
        </FormControl>

        <ul>
          {todos.map((todo)=>(
            <Todos text={todo} />
          ))}          
        </ul>
      </header>
    </div>
  );
}

export default App;
