import React, { Component } from 'react';
import './App.css';

import Header from './common/Header';

class App extends Component {

  render() {

    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
