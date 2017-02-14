import {
  FETCH_CHAT_MESSAGES,
  FETCH_CHAT_ROOMS,
  CHANGE_ROOM
} from '../../constants/actionTypes';

export const chatRooms = (state = {
  rooms: [],
  fetching: false,
  fetched: false,
  error: null
}, action) => {
  switch (action.type) {
    case `${FETCH_CHAT_ROOMS}_PENDING`:
      return {
        ...state,
        fetching: true
      };
    case `${FETCH_CHAT_ROOMS}_REJECTED`:
      return {
        ...state,
        fetching: false,
        error: action.payload.data
      };
    case `${FETCH_CHAT_ROOMS}_FULFILLED`:
      return {
        ...state,
        rooms: action.payload.data,
        fetching: false,
        fetched: true
      };
    default:
      return state
  }
};

export const chatMessages = (state = {
  messages: [],
  fetching: false,
  fetched: false,
  error: null
}, action) => {
  switch (action.type) {
    case `${FETCH_CHAT_MESSAGES}_PENDING`:
      return {
        ...state,
        fetching: true
      };
    case `${FETCH_CHAT_MESSAGES}_REJECTED`:
      return {
        ...state,
        fetching: false,
        error: action.payload.data
      };
    case `${FETCH_CHAT_MESSAGES}_FULFILLED`:
      return {
        ...state,
        messages: action.payload.data,
        fetching: false,
        fetched: true
      };
    default:
      return state
  }
};

export const chatRoom = (state = '', action) => {
  switch (action.type) {
    case CHANGE_ROOM:
      return action.payload;
    default:
      return state
  }
};