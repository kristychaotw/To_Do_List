import React from "react";

export default function Item({ todo, deleteTodo }) {
    function handleDeleteClick(){
        deleteTodo(todo.id)
    }  
    
    return (
    <div>
      <label>
          {todo.name}
          <button onClick={handleDeleteClick}>刪除</button>
        </label>
    </div>
  );
}
