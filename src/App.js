import { useState } from 'react';
import './App.css';
import ToDos from './Components/ToDos/ToDos';
import AddToDo from './Components/ToDos/Forms/AddToDo';



const dummy_todos = [
  { tittle: 'learn react js' },
  { tittle: 'do assignments' },
  { tittle: 'solve dsa problems' }]
function App() {
  const [todos, setTodos] = useState(dummy_todos);
  const addToDo = (todo) => {
    console.log(todo)
    setTodos((privousToDos) => {
      return [todo, ...privousToDos]
    })
  }

  return (
    <div className="App">
      <AddToDo onAdd={addToDo} />
      <ToDos todos={todos} />
    </div>
  );
}

export default App;
