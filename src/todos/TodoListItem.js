import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button>Mark As Completed</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
