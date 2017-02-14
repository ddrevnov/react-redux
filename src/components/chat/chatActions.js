import axios from 'axios';
import * as types from '../../constants/actionTypes';

export const fetchRooms = () => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_ROOMS,
    payload: axios.get(`/api/chat/rooms`)
  });
};

export const fetchMessagesByRoom = (id) => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_MESSAGES,
    payload: axios.get(`/api/chat/messages/${id}`)
  });
};

export const sendMessage = (message) => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_MESSAGES,
    payload: axios.post(`/api/chat/messages`, message)
  });
};

export const changeRoom = (room) => dispatch => {
  dispatch({
    type: types.CHANGE_ROOM,
    payload: room
  });
};