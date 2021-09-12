import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, markTodoAsCompleted } from "./actions";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovedPressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovedPressed={onRemovedPressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovedPressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
