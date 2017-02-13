import * as types from '../../constants/actionTypes';

const initialState = {
  rooms: [],
  messages: []
};

export const chatRooms = (state = initialState.rooms, action) => {
  switch (action.type) {
    case `${types.FETCH_CHAT_ROOMS}_FULFILLED`:
      return state.concat(action.payload.data);
    default:
      return state
  }
};

export const chatMessages = (state = initialState.messages, action) => {
  switch (action.type) {
    case `${types.FETCH_CHAT_MESSAGES}_FULFILLED`:
      return state.concat(action.payload.data);
    default:
      return state
  }
};