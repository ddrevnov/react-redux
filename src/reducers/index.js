import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import auth from './authReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  auth,
  form,
});

export default rootReducer;
