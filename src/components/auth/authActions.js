import axios from 'axios';
import { browserHistory } from 'react-router';
import * as types from '../../constants/actionTypes';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        dispatch({ type: types.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(err => {
        console.log(err);
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(error) {
  localStorage.removeItem('token');
  return {
    type: types.UNAUTH_USER,
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get('/', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: types.FETCH_MESSAGE,
        payload: response.data.message
      });
    })
  }
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post('/api/users', { email, password })
      .then(response => {
        dispatch({ type: types.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(response => {
        dispatch(authError(response.message));
      });
  }
}