import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class User extends Component {
  onNavigateHome() {
    browserHistory.push('/home');
  }

  render() {
    return (
      <div>
        <h3>The user page</h3>
        <p>User ID: {this.props.params.id}</p>
        <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home!</button>
      </div>
    );
  }
}

export default User;