import { FETCH_USER } from '../constants/actionTypes';

export default function userReducer(state = null, action) {
  switch (action.type) {
    case `${FETCH_USER}_FULFILLED`:
      return action.payload.data;

    default:
      return state;
  }
}