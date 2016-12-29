import React, { Component } from 'react';

import Header from './Header';

class Root extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Root;