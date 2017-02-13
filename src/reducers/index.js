import {combineReducers} from 'redux';
import todos from '../components/todo/todoReducer';
import auth from '../components/auth/authReducer';
import {chatRooms} from '../components/chat/chatReducer';
import {chatMessages} from '../components/chat/chatReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  auth,
  chatRooms,
  chatMessages,
  form,
  routing: routerReducer
});

export default rootReducer;
