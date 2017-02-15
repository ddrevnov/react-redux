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
    payload: axios.post(`/api/chat/messages`, message)
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