import "./List.css";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

function List({ todos, onChecked, onDelete }) {
  const [search, setSearch] = useState("");

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function getFilteredData() {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        value={search}
      />
      <div className="todosWrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChecked={onChecked}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
