import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/todoActions';

export class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let todo = {
      ...this.props,
      text: this.textInput.value
    };
    this.props.dispatch(actions.updateTodo(todo));
    this.setState({ editing: false });
  };

  render() {
    const { text, completed, _id, dispatch } = this.props;

    let element;

    if (this.state.editing) {
      element = (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={(input) => { this.textInput = input; }}
          type="text" defaultValue={text}/>
      </form>
      );
    } else {
      element = (
        <span>{ text }</span>
      );
    }

    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        className="list-group-item row">
        <div
          onDoubleClick={this.handleDoubleClick}
          className="col-md-11">
          { element }
        </div>
        <div className="col-md-1">
          <button
            onClick={() => {
              dispatch(actions.deleteTodo(_id));
            }}
            className="btn btn-danger">Delete</button>
        </div>
      </li>
    );
  }

};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect()(TodoItem);