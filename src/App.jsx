import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')


  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter(
      (todo,todoIndex)=> {
        return index!=todoIndex
      }
    )
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  useEffect(() => {
    if(!localStorage) {
      return;
    }

    let localTodos =  localStorage.getItem('todos')

    if(!localTodos){
      return;
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    }, []);


  return (
    <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos = {handleAddTodos}/>
        <TodoList handleDeleteTodos ={handleDeleteTodos} handleEditTodos = {handleEditTodos} todos = {todos}/>
    </>
  )
}

export default App


// react has fucntional components, here the function name is App.
// funciton can have all the logic. what we return from the function is known as jss
// jss is a html with javascript inside it
// here, App is the highest leel component. Everything inside app gets redered via Main.jsx


//Stateful variable is a variable that user can interact with