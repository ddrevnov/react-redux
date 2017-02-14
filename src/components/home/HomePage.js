import React from 'react';
import {browserHistory} from 'react-router';
import { Container, Header, Button, Grid } from 'semantic-ui-react';

class HomePage extends React.Component {
  handleClick() {
    browserHistory.push('/about');
  }

  render() {
    return (
      <Grid.Row>
        <Container>
          <Header as="h1">Home project</Header>
          <p>React, Redux, Express api with jwt and React Router in ES6 for ultra-responsive web apps.</p>
          <Button onClick={this.handleClick.bind(this)} primary>Learn More</Button>
        </Container>
      </Grid.Row>
    );
  }
}

export default HomePage;
