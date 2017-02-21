import axios from 'axios';
import * as types from '../../constants/actionTypes';
import { browserHistory } from 'react-router';

export function signinUser(data) {
  console.log(data);
  return function(dispatch) {
    axios.post('/api/auth/login', data)
      .then(response => {
        dispatch({ type: `${types.AUTH_USER}_FULFILLED`, payload: response });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: `${types.AUTH_USER}_REJECTED` });
      })
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post('/api/users', { email, password })
      .then(response => {
        dispatch({ type: `${types.AUTH_USER}_FULFILLED`, payload: response });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: `${types.AUTH_USER}_REJECTED` });
      })
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