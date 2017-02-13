import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const ChatList = ({ messages }) => {

  if (!messages.length) return <ListGroup>
    <span>Список пуст</span>
  </ListGroup>;

  return (
    <ListGroup>
      {messages.map(message =>
        <ListGroupItem key={message._id}>{message.text}</ListGroupItem>
      )}
    </ListGroup>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatList;