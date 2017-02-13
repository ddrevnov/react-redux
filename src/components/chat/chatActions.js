import axios from 'axios';
import * as types from '../../constants/actionTypes';

export const fetchRooms = (id) => dispatch => {
  dispatch({
    type: types.FETCH_CHAT_ROOMS,
    payload: axios.get(`/api/chat/rooms`)
  });
};