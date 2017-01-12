import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';

class TodoPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.fetchTodos();
  }

  render() {
    const {todos} = this.props;
    console.log(todos);

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
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);