import React, {PropTypes} from 'react';
import ChatItem from './ChatItem';
import { Comment, Segment, Dimmer, Loader, Message } from 'semantic-ui-react';

const ChatList = ({ messages, messagesFetched, messagesFetching, user }) => {

  const preloader = () => {
    if (messagesFetching) {
      return <Segment>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
    }
  };

  const message = () => {
    if (user.left) {
      return <Message color='blue'>
        User left room to {user.newRoom}
        </Message>
    } else if (user.joined) {
      return <Message color='blue'>
        A new user has joined {user.oldRoom ? `from ${user.oldRoom}` : ''}
      </Message>
    }
  };

  const list = () => {
    if (messagesFetched) {
      return messages.map((message, i) =>
        <ChatItem key={i} message={message} />
      )
    }
  };

  return (
    <Comment.Group className="chat">
      {message()}
      {preloader()}
      {list()}
    </Comment.Group>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatList;