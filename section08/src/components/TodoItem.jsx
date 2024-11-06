import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onChecked, onDelete }) {
  return (
    <div className="TodoItem">
      <input
        checked={todo.isDone}
        onChange={() => onChecked(todo.id)}
        type="checkbox"
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;
