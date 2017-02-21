import * as types from '../../constants/actionTypes';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case `${types.AUTH_USER}_FULFILLED`:
      return { ...state, error: '', isAuth: true };
    case `${types.AUTH_USER}_REJECTED`:
      return { ...state, error: action.payload.data.message, isAuth: false };
    case types.UNAUTH_USER:
      return { ...state, isAuth: false };
    case types.FETCH_MESSAGE:
      return { ...state, message: action.payload };

    default:
      return state;
  }
}
