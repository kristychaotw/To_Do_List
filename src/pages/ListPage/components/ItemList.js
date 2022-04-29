import React from 'react'
import Item from './Item'

export default function ItemList({todos,deleteTodo}) {
  return todos.map((todo)=>{
        return <Item key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      })
}
