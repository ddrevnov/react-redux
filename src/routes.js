import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import SigninPage from './components/auth/SigninPage';
import SignoutPage from './components/auth/SignoutPage';
import SignupPage from './components/auth/SignupPage';
import RequireAuth from './components/auth/RequireAuth';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={RequireAuth(CoursesPage)} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="signin" component={SigninPage} />
    <Route path="signout" component={SignoutPage} />
    <Route path="signup" component={SignupPage} />
  </Route>
);
