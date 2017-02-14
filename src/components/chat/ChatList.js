import React, {PropTypes} from 'react';
import ChatItem from './ChatItem';
import { List } from 'semantic-ui-react';

const ChatList = ({ messages, messagesFetched, messagesFetching }) => {

  return (
    <List relaxed>
      {messages.map((message, i) =>
        <ChatItem key={i} message={message} />
      )}
    </List>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatList;