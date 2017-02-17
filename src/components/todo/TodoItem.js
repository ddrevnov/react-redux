import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './todoActions';
import { Form, List, Button, Checkbox } from 'semantic-ui-react';
import { dateFilter } from '../../lib';

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

  handleChange = (e, data) => {
    let todo = {
      ...this.props,
      completed: data.checked
    };
    this.props.dispatch(actions.updateTodo(todo));
  };

  render() {
    const { text, completed, _id, dispatch, created } = this.props;

    let element;

    if (this.state.editing) {
      element = (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input
            name="input"
            ref={(input) => { this.textInput = input; }}
            defaultValue={text}/>
        </Form.Field>
      </Form>
      );
    } else {
      element = (
        <span>{ text }</span>
      );
    }

    return (
      <List.Item>
        <List.Content floated='left'>
          <Checkbox
            checked={completed}
            className='todo-item__checkbox'
            onChange={this.handleChange} />
          <span
            onDoubleClick={this.handleDoubleClick}
            className={completed ? 'todo-item__completed' : ''}>
          { element }
          <span className="todo-item__date"> { dateFilter(created) }</span>
        </span>
        </List.Content>
        <List.Content floated='right'>
          <Button
            color="red"
            onClick={() => {
              dispatch(actions.deleteTodo(_id));
            }}>
            Delete
          </Button>
        </List.Content>
      </List.Item>
    );
  }

};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect()(TodoItem);