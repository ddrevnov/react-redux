import axios from 'axios';
import * as types from '../../constants/actionTypes';

export const fetchRooms = () => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_ROOMS,
    payload: axios.get(`/api/chat/rooms`)
  });
};

export const fetchMessagesByRoom = (roomName) => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_MESSAGES,
    payload: axios.get(`/api/chat/messages/${roomName}`)
  });
};

export const sendMessage = (message) => dispatch => {
  dispatch({
    type: types.NEW_CHAT_MESSAGE,
    payload: message
  });
};

export const changeRoom = (room) => dispatch => {
  dispatch({
    type: types.CHANGE_ROOM,
    payload: room
  });
};

export const changeChatName = (name) => dispatch => {
  dispatch({
    type: types.CHANGE_CHAT_NAME,
    payload: name
  });
};

export const userLeft = (data) => dispatch => {
  dispatch({
    type: types.USER_LEFT,
    payload: {
      ...data,
      joined: false,
      left: true
    }
  });
};

export const userJoined = (data) => dispatch => {
  dispatch({
    type: types.USER_JOINED,
    payload: {
      ...data,
      joined: true,
      left: false
    }
  });
};