import * as types from '../../constants/actionTypes';

const initialState = {
  todos: [],
  todo: {}
};

const todo = (state = initialState.todo, action) => {
  console.log(state, action);
  switch (action.type) {
    case `${types.ADD_TODO}_FULFILLED`:
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
    case `${types.FETCH_TODOS}_FULFILLED`:
      return state = action.payload.data;
    case `${types.FETCH_TODOS}_REJECTED`:
      return action.payload;
    case `${types.ADD_TODO}_FULFILLED`:
      return [
        ...state,
        todo(undefined, action)
      ];
    case `${types.UPDATE_TODO}_FULFILLED`:
      return state.map((todo) => {
        if (action.payload.data._id === todo._id) {
          return action.payload.data;
        }
        return todo;
      });
    case `${types.DELETE_TODO}_FULFILLED`:
      return state.filter((todo) => action.payload.data._id !== todo._id);

    case types.FILTER_TODOS:
      switch (action.payload) {
        case 'all':
          return state;
        case 'active':
          return state.filter(todo => todo.completed);
        case 'completed':
          return state.filter(todo => !todo.completed);
        default: return state
      }

    default:
      return state;
  }
}