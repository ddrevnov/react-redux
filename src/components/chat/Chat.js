import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chatActions from './chatActions';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatFooter from './ChatFooter';
import { Container } from 'semantic-ui-react';

class Chat extends Component {

  componentWillMount() {
    this.props.actions.fetchRooms();
    let room = localStorage.getItem('room');

    if (room) {
      this.props.actions.changeRoom(room);
      this.props.actions.fetchMessagesByRoom(room);
    }
  }

  render() {
    const {
      actions,
      rooms,
      room,
      chatName,
      messages,
      messagesFetched,
      messagesFetching,
    } = this.props;

    return (
      <Container>
        <ChatHeader
          rooms={rooms}
          room={room}
          changeRoom={actions.changeRoom}
          changeChatName={actions.changeChatName}
          fetchMessagesByRoom={actions.fetchMessagesByRoom} />
        <ChatList
          messages={messages}
          messagesFetched={messagesFetched}
          messagesFetching={messagesFetching}
        />
        <ChatFooter
          room={room}
          chatName={chatName}
          sendMessage={actions.sendMessage} />
      </Container>
    );
  }
}

Chat.propTypes = {
  actions: PropTypes.object.isRequired,

  rooms: PropTypes.array.isRequired,
  room: PropTypes.string.isRequired,

  messages: PropTypes.array.isRequired,
  messagesFetched: PropTypes.bool,
  messagesFetching: PropTypes.bool,

  chatName: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    rooms: state.chatRooms.rooms,

    messages: state.chatMessages.messages,
    messagesFetched: state.chatMessages.fetched,
    messagesFetching: state.chatMessages.fetching,

    room: state.chatRoom,

    chatName: state.chatName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);