import React from "react";
import { Link } from "react-router-dom";

export default function Item({ todo, deleteTodo }) {
  function handleDeleteClick() {
    deleteTodo(todo.id);
  }

  return (
    <>
    <div className="todos">
      <label>{todo.name}</label>
      <button onClick={handleDeleteClick}>
        <Link to="">刪除</Link>
      </button>
    </div>
    </>
  );
}
