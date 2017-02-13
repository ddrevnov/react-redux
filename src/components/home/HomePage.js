import React from 'react';
import {Link} from 'react-router';
import io from 'socket.io-client';
import {SERVER_PATH} from '../../constants/appConstants';

const socket = io.connect(SERVER_PATH);

socket.on('test', () => {
  console.log('test passed');
});

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home project</h1>
        <p>React, Redux, Express api with jwt and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
