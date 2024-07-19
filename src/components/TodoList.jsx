import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  const {todos, handleDeleteTodos} = props

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) =>
            {
                return (
                   <TodoCard {...props} todoIndex={todoIndex} key={todoIndex} >
                        <p>{todo}</p>
                   </TodoCard>
                )  
            })}
    </ul>
  )

}

 
// so here -  <p>{todo}</p> - is passed to the TodoCard component as props or children

//The line const {todos} = props uses object destructuring, a feature in JavaScript that allows you to extract properties from objects and assign them to variables.
//destructuring just makes the code cleaner