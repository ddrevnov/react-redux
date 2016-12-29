import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './components/Home';
import User from './components/User';
import Root from './components/Root';

class App extends Component {

  render() {

    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <Router history={browserHistory}>
              <Route path={'/'} component={Root}>
                <IndexRoute component={Home} />
                <Route path={'user/:id'} component={User} />
                <Route path={'home'} component={Home} />
              </Route>
            </Router>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
