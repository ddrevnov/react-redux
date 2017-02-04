import {combineReducers} from 'redux';
import todos from './todoReducer';
import auth from './authReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  auth,
  form,
  routing: routerReducer
});

export default rootReducer;
