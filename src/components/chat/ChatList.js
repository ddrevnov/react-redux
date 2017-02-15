import React, {PropTypes} from 'react';
import ChatItem from './ChatItem';
import { List, Segment, Dimmer, Loader } from 'semantic-ui-react';

const ChatList = ({ messages, messagesFetched, messagesFetching }) => {

  const preloader = () => {
    if (messagesFetching) {
      return <Segment>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
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
    <List relaxed>
      {preloader()}
      {list()}
    </List>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatList;