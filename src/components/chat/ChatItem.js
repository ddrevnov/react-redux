import React, {PropTypes} from 'react';
import { List, Image } from 'semantic-ui-react';

const ChatItem = ({ message }) => {
  return (
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>{message.chatName}</List.Header>
        <List.Description>
          {message.text}
        </List.Description>
      </List.Content>
      </List.Item>
  );
};

ChatItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default ChatItem;