import * as types from '../../constants/actionTypes';

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, error: '', isAuth: true };
    case types.UNAUTH_USER:
      return { ...state, isAuth: false };
    case types.AUTH_ERROR:
      return { ...state, error: action.payload };
    case types.FETCH_MESSAGE:
      return { ...state, message: action.payload };

    default:
      return state;
  }
}
