import React, {PropTypes, Component} from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

class ChatFooter extends Component {
  state = {
    messageText: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { sendMessage, room, chatName } = this.props;
    let { messageText } = this.state;

    if (!chatName) {
      chatName = 'Guest';
    }

    sendMessage({
      text: messageText,
      chatName,
      room
    });
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

ChatFooter.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default ChatFooter;