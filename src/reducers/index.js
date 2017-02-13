import {combineReducers} from 'redux';
import todos from '../components/todo/todoReducer';
import auth from '../components/auth/authReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  auth,
  form,
  routing: routerReducer
});

export default rootReducer;
