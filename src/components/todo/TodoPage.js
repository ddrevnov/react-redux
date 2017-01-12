import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';

class TodoPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <h1>Todo page</h1>
        </div>
      </div>
    );
  }
}

TodoPage.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);