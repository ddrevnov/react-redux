import * as types from '../actions/actionTypes';

const initialState = {
  todos: []
};

export default function todoReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return state.concat(action.payload);
    case types.FETCH_TODOS_ERROR:
      return action.payload;

    default:
      return state;
  }
}