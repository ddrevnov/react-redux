import axios from 'axios';
import * as types from '../../constants/actionTypes';

export const deleteTodo = (id) => dispatch => {
  dispatch({
    type: types.DELETE_TODO,
    payload: axios.delete(`/api/todos/${id}`)
  });
};

export const addTodo = (todo) => dispatch => {
  dispatch({
    type: types.ADD_TODO,
    payload: axios.post('/api/todos', todo)
  });
};

export const updateTodo = (todo) => dispatch => {
  dispatch({
    type: types.UPDATE_TODO,
    payload: axios.put(`/api/todos/${todo._id}`, todo)
  });
};

export const fetchTodos = () => dispatch => {
  dispatch({
    type: types.FETCH_TODOS,
    payload: axios.get('/api/todos')
  });
};

export const filterTodos = (filter) => dispatch => {
  dispatch({
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  });
};

export const sortTodos = (sort) => dispatch => {
  dispatch({
    type: types.SET_SORT,
    payload: sort
  });
};