import React, { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

function TodoItem({ todo }) {
  const { onChecked, onDelete } = useContext(TodoDispatchContext);

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

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.todo.id !== nextProps.todo.id) return false;
//   if (prevProps.todo.isDone !== nextProps.todo.isDone) return false;
//   if (prevProps.todo.content !== nextProps.todo.content) return false;
//   if (prevProps.todo.date !== nextProps.todo.date) return false;

//   return true;
// });

export default memo(TodoItem);
