import React, {PropTypes} from 'react';
import { Comment } from 'semantic-ui-react';
import { dateFilter } from '../../lib';

const ChatItem = ({ message }) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{message.chatName}</Comment.Author>
        <Comment.Metadata>
          <div>{dateFilter(message.created)}</div>
        </Comment.Metadata>
        <Comment.Text>{message.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

ChatItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default ChatItem;