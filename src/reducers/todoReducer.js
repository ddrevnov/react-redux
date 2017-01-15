import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
  todo: {}
};

const todo = (state = initialState.todo, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        _id: action.payload._id,
        text: action.payload.text,
        completed: false
      };
    case types.TOGGLE_TODO:
      if (state._id !== action.payload) {
        return {...state}
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return state.concat(action.payload);
    case types.FETCH_TODOS_ERROR:
      return action.payload;
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action.payload)
      ];
    case types.TOGGLE_TODO:
      return state.map(t =>
        todo(t, {...action})
      );

    default:
      return state;
  }
}