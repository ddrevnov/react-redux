import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';

class SignoutPage extends Component {

  componentWillMount() {
    this.props.actions.signoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
}

SignoutPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignoutPage);