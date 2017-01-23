import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import TodoList from './TodoList';

class TodoPage extends Component {

  componentWillMount() {
    this.props.actions.fetchTodos();
  }

  // onTodoClick(id) {
  //   console.log(id);
  //   this.props.actions.toggleCompleted(id);
  // };

  addTodo(event) {
    event.preventDefault();
    let text = this.textInput.value.trim();
    let todo = {
      text,
      completed: false
    };

    this.props.actions.addTodo(todo);
    this.textInput.value = '';
  }

  render() {
    const {todos} = this.props;

    return (
      <div className="container">
        <div className="col-md-12">
          <h1>Todo page</h1>
          <form onSubmit={this.addTodo.bind(this)}>
            <input
              ref={(input) => { this.textInput = input; }}
              type="text"
              className="form-control"/>
          </form>
          <TodoList todos={todos} />
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