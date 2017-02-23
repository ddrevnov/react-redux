import axios from 'axios';
import * as types from '../../constants/actionTypes';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

export const fetchUser = (id) => dispatch => {
  axios.defaults.headers.common['userId'] = id;
  dispatch({
    type: types.FETCH_USER,
    payload: axios.get(`/api/users/${id}`)
  });
};

export function signinUser(data) {
  console.log(data);
  return function(dispatch) {
    axios.post('/api/auth/login', data)
      .then(response => {
        dispatch({ type: `${types.AUTH_USER}_FULFILLED`, payload: response });
        let token = response.data.token;
        localStorage.setItem('token', token);
        browserHistory.push('/');

        let userId = jwtDecode(token).id;
        dispatch(fetchUser(userId));
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
        let token = response.data.token;
        localStorage.setItem('token', token);
        browserHistory.push('/');

        let userId = jwtDecode(token).id;
        dispatch(fetchUser(userId));
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