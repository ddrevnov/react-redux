import axios from 'axios';
import * as types from './actionTypes';

export const loadTodosSuccess = (todos) => {
  return {type: types.FETCH_TODOS_SUCCESS, payload: todos};
};

export const addTodoSuccess = (todo) => {
  return {type: types.ADD_TODO_SUCCESS, payload: todo};
};

export const loadTodosError = () => {
  return {type: types.FETCH_TODOS_ERROR, payload: 'Error: get todos'};
};
export const addTodoError = () => {
  return {type: types.ADD_TODO_ERROR, payload: 'Error: add todo'};
};

export const deleteTodoSuccess = (todo) => {
  return {type: types.DELETE_TODO_SUCCESS, payload: todo};
};
export const deleteTodoError = () => {
  return {type: types.DELETE_TODO_ERROR, payload: 'Error: delete todo'};
};

// export const toggleCompleted = (id) => {
//   return {type: types.TOGGLE_TODO, payload: id};
// };

export const deleteTodo = (id) => dispatch => {
  axios.delete(`/api/todos/${id}`)
    .then(res => dispatch(deleteTodoSuccess(res.data)))
    .catch(err => {
      console.error(err);
      dispatch(deleteTodoError());
    });
};

export const addTodo = (todo) => dispatch => {
  axios.post('/api/todos', todo)
    .then(res => dispatch(addTodoSuccess(res.data)))
    .catch(err => {
      console.error(err);
      dispatch(addTodoError());
    });
};

export const fetchTodos = () => dispatch => {
  axios.get('/api/todos')
    .then(res => dispatch(loadTodosSuccess(res.data)))
    .catch(err => {
      console.error(err);
      dispatch(loadTodosError());
    });
};
