import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import SigninPage from './components/auth/SigninPage';
import SignoutPage from './components/auth/SignoutPage';
import SignupPage from './components/auth/SignupPage';
import TodoPage from './components/todo/TodoPage';
import RequireAuth from './components/auth/RequireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="todo" component={RequireAuth(TodoPage)} />
    <Route path="about" component={AboutPage} />
    <Route path="signin" component={SigninPage} />
    <Route path="signout" component={SignoutPage} />
    <Route path="signup" component={SignupPage} />
  </Route>
);
