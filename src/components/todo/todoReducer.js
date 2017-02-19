import * as types from '../../constants/actionTypes';

const todo = (state = {}, action) => {
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

export const visibilityFilter = (state = types.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state
  }
};

export const sort = (state = types.DESCENDING, action) => {
  switch (action.type) {
    case types.SET_SORT:
      return action.payload;
    default:
      return state
  }
};

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case `${types.FETCH_TODOS}_FULFILLED`:
      return action.payload.data;
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
    default:
      return state;
  }
}