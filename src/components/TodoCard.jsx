import React from 'react'

export default function TodoCard(props) {

  const {children, handleDeleteTodos, todoIndex, handleEditTodos} = props  

  return (
    <li className='todoItem'>
        <div className='actionsContainer'> 
            <button onClick={() => handleEditTodos(todoIndex)}>
            <i class="fa-solid fa-pencil"></i>
            </button>

             <button onClick={()=>handleDeleteTodos(todoIndex)}>
             <i class="fa-regular fa-trash-can"></i>
             </button>
        </div>
        {children}

    </li>
  )
}


//we receive data from the parent components thrigh properties called as props