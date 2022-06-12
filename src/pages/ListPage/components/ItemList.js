import React from 'react'
import Item from './Item'

export default function ItemList({todos}) {
  return todos.map((todo)=>{
    console.log(todo.name);
        return <Item key={todo.id} todo={todo} />
      })
}
