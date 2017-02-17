import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chatActions from './chatActions';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatFooter from './ChatFooter';
import { Container } from 'semantic-ui-react';
import { socket } from '../../constants/appConstants';

import './chat.scss';

class Chat extends Component {

  componentWillMount() {
    let { actions } = this.props;

    actions.fetchRooms();
    let room = localStorage.getItem('room');
    let chatName = localStorage.getItem('chatName');

    if (room) {
      actions.changeRoom(room);
      actions.fetchMessagesByRoom(room);
      socket.emit('new user', {room});
    }

    if (chatName) {
      actions.changeChatName(chatName);
    }
  }

  componentDidMount() {
    let { actions } = this.props;

    socket.on('message created', msg => {
      actions.sendMessage(msg);
    });

    socket.on('user left', (data) => {
      console.log(data);
      actions.userLeft(data);
    });

    socket.on('user joined', (data) => {
      console.log(data);
      actions.userJoined(data);
    });
  }

  render() {
    const {
      actions,
      rooms,
      room,
      user,
      chatName,
      messages,
      messagesFetched,
      messagesFetching,
    } = this.props;

    return (
      <Container>
        <ChatHeader
          rooms={rooms}
          chatName={chatName}
          room={room}
          changeRoom={actions.changeRoom}
          changeChatName={actions.changeChatName}
          fetchMessagesByRoom={actions.fetchMessagesByRoom} />
        <ChatList
          user={user}
          messages={messages}
          messagesFetched={messagesFetched}
          messagesFetching={messagesFetching}
        />
        <ChatFooter
          room={room}
          chatName={chatName} />
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

  user: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  return {
    rooms: state.chatRooms.rooms,

    messages: state.chatMessages.messages,
    messagesFetched: state.chatMessages.fetched,
    messagesFetching: state.chatMessages.fetching,

    room: state.chatRoom,

    chatName: state.chatName,

    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);