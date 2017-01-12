import axios from 'axios';
import * as types from './actionTypes';

export const loadAuthorsSuccess = (todos) => {
  return {type: types.FETCH_TODOS_SUCCESS, payload: todos};
};

export const loadAuthorsError = () => {
  return {type: types.FETCH_TODOS_ERROR, payload: 'Error: get todos'};
};

export const fetchTodos = () => dispatch => {
  axios.get('/api/todos')
    .then(todos => dispatch(loadAuthorsSuccess(todos)))
    .catch(err => {
      console.error(err);
      dispatch(loadAuthorsError());
    });
};
