import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
  todo: {}
};

const todo = (state = initialState.todo, action) => {
  console.log(state, action);
  switch (action.type) {
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return state = action.payload;
    case types.FETCH_TODOS_ERROR:
      return action.payload;
    case types.ADD_TODO_SUCCESS:
      return [
        ...state,
        todo(undefined, action)
      ];
    case types.UPDATE_TODO_SUCCESS:
      return state.map((todo) => {
        if (action.payload._id === todo._id) {
          return action.payload;
        }
        return todo;
      });
    case types.DELETE_TODO_SUCCESS:
      return state.filter((todo) => action.payload._id !== todo._id);
    default:
      return state;
  }
}