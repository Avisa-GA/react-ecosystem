import {
  loadTodosInProgress,
  loadsTodosSuccess,
  loadTodosFailure,
  createTodo,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8000/todos");
    const todos = await response.json();
    dispatch(loadsTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(dispalyAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8000/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(dispalyAlert(e));
  }
};

export const dispalyAlert = (text) => () => {
  alert(text);
};
