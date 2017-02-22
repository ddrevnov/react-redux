import {combineReducers} from 'redux';
import todos, { visibilityFilter, sort } from '../components/todo/todoReducer';
import auth from '../components/auth/authReducer';
import {
  chatRooms,
  chatRoom,
  chatMessages,
  chatName,
  chatUser} from '../components/chat/chatReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';

const rootReducer = combineReducers({
  visibilityFilter,
  sort,
  todos,
  auth,
  chatRooms,
  chatMessages,
  chatRoom,
  chatName,
  chatUser,
  user,
  form,
  routing: routerReducer
});

export default rootReducer;
