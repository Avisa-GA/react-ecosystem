import {
  loadTodosInProgress,
  loadsTodosSuccess,
  loadTodosFailure,
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

export const dispalyAlert = (text) => () => {
  alert(text);
};
