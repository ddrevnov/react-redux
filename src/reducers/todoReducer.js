import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
  todo: {}
};

const todo = (state = initialState.todo, action) => {
  console.log(state, action);
  switch (action.type) {
    case types.ADD_TODO_FULFILLED:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state
  }
};

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.FETCH_TODOS_FULFILLED:
      return state = action.payload.data;
    case types.FETCH_TODOS_REJECTED:
      return action.payload;
    case types.ADD_TODO_FULFILLED:
      return [
        ...state,
        todo(undefined, action)
      ];
    case types.UPDATE_TODO_FULFILLED:
      return state.map((todo) => {
        if (action.payload.data._id === todo._id) {
          return action.payload.data;
        }
        return todo;
      });
    case types.DELETE_TODO_FULFILLED:
      return state.filter((todo) => action.payload.data._id !== todo._id);
    default:
      return state;
  }
}