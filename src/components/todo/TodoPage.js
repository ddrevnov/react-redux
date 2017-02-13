import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from './todoActions';
import TodoList from './TodoList';
import { Field, reduxForm } from 'redux-form';

class TodoPage extends Component {

  componentWillMount() {
    this.props.actions.fetchTodos();
  }

  addTodo(formProps) {
    let text = formProps.todoText;

    if (!text) return;

    let todo = {
      text,
      completed: false
    };

    this.props.actions.addTodo(todo);
    this.props.reset('addTodoForm');
  }

  render() {
    const {handleSubmit, todos, submitting, pristine} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Todo page</h1>
            <form className="well row" onSubmit={handleSubmit(this.addTodo.bind(this))}>
              <div className="col-md-11">
                <Field
                  name="todoText"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="Add todo" />
              </div>
              <div className="col-md-1">
                <button
                  disabled={pristine || submitting}
                  className="btn btn-success pull-right">Add</button>
              </div>
            </form>
            <TodoList todos={todos} />
          </div>
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

TodoPage = reduxForm({
  form: 'addTodoForm'
})(TodoPage);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);