import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './todoActions';
import { Form, List, Button, Input } from 'semantic-ui-react';

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
      <Form onSubmit={this.handleSubmit}>
        <Input
          ref={(input) => { this.textInput = input; }}
          type="text" defaultValue={text}/>
      </Form>
      );
    } else {
      element = (
        <span>{ text }</span>
      );
    }

    return (
      <List.Item
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
        <List.Content floated='left'>
          {/*<Form.Field control='input' type='checkbox' />*/}
          <span onDoubleClick={this.handleDoubleClick}>
          { element }
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