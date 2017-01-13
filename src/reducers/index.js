import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import todos from './todoReducer';
import auth from './authReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  courses,
  authors,
  todos,
  ajaxCallsInProgress,
  auth,
  form,
  routing: routerReducer
});

export default rootReducer;
