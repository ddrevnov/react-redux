import axios from 'axios';
import * as types from './actionTypes';

export const loadAuthorsSuccess = (todos) => {
  return {type: types.FETCH_TODOS_SUCCESS, payload: todos};
};

export const loadAuthorsError = () => {
  return {type: types.FETCH_TODOS_ERROR, payload: 'Error: get todos'};
};

export const toggleCompleted = (id) => {
  return {type: types.TOGGLE_TODO, payload: id};
};

export const fetchTodos = () => dispatch => {
  axios.get('/api/todos')
    .then(res => dispatch(loadAuthorsSuccess(res.data)))
    .catch(err => {
      console.error(err);
      dispatch(loadAuthorsError());
    });
};
