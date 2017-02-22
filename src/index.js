/*eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import '../node_modules/toastr/build/toastr.min.css';
import { AUTH_USER } from './constants/actionTypes';
import { syncHistoryWithStore } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser } from './components/auth/authActions';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: `${AUTH_USER}_FULFILLED` });
  let userId = jwtDecode(token).id;
  store.dispatch(fetchUser(userId));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
