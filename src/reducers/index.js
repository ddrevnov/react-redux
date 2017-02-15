import {combineReducers} from 'redux';
import todos from '../components/todo/todoReducer';
import auth from '../components/auth/authReducer';
import {
  chatRooms,
  chatRoom,
  chatMessages,
  chatName} from '../components/chat/chatReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  auth,
  chatRooms,
  chatMessages,
  chatRoom,
  chatName,
  form,
  routing: routerReducer
});

export default rootReducer;
