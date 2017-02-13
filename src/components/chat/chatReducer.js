import * as types from '../../constants/actionTypes';

const initialState = {
  rooms: []
};

const rooms = (state = initialState.rooms, action) => {
  console.log(state, action);
  switch (action.type) {
    case `${types.FETCH_CHAT_ROOMS}_FULFILLED`:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state
  }
};