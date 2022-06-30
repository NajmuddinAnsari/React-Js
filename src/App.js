import { useState } from 'react';
import './App.css';
import ToDos from './Components/ToDos/ToDos';
import AddToDo from './Components/Forms/AddToDo';

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
  const deletToDo = (deltedTodo) => {
    console.log(deltedTodo)
    // const finalToDos = todos.filter((todo) => {
    //   return
    // })
    setTodos(todos.filter((todo) => {
      return todo !== deltedTodo
    }))
  }

  return (
    <div className="App">
      <AddToDo onAdd={addToDo} />
      <ToDos todos={todos} onDelete={deletToDo} />
    </div>
  );
}

export default App;
