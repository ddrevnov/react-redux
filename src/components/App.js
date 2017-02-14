import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Grid celled='internally'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Header
                loading={this.props.loading}
              />
              {this.props.children}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
