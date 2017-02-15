import React, {PropTypes} from 'react';
import { List, Image } from 'semantic-ui-react';
import { dateFilter } from '../../lib';

const ChatItem = ({ message }) => {
  return (
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <div>
          <List.Header>
            <a href="">{message.chatName}</a>
            <span> {dateFilter(message.created)}</span>
          </List.Header>
        </div>
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