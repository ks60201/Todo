import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = (props) => {
  const {todos}=props
  return (
      <ul className='main'>
        {todos.map((todo,id)=>{
          return(
            <TodoCard {...props} key={id} id= {id}  >
              <p>{todo}</p>
            </TodoCard>
          )

        })}
      </ul>
  )
}
