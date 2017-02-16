import React, {Component} from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';
import { socket } from '../../constants/appConstants';

class ChatFooter extends Component {
  state = {
    messageText: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { room, chatName } = this.props;
    let { messageText } = this.state;

    if (!chatName) {
      chatName = 'Guest';
    }

    let msg = {
      text: messageText,
      chatName,
      room
    };
    socket.emit('new message', msg);
    this.setState({messageText: ''});
  };

  handleTyping = (e) => {
    this.setState({messageText: e.target.value.trim()});
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <TextArea
            name="messageText"
            onChange={this.handleTyping}
            value={this.state.messageText}
            placeholder="Type message..." />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Send</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default ChatFooter;