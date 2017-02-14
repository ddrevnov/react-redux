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
  }

  render() {
    const {
      actions,
      rooms,
      room,
      roomsFetched,
      roomsFetching,
      messages,
      messagesFetched,
      messagesFetching,
    } = this.props;

    return (
      <Container>
        <ChatHeader
          rooms={rooms}
          changeRoom={actions.changeRoom}
          fetchMessagesByRoom={actions.fetchMessagesByRoom} />
        <ChatList
          messages={messages}
          messagesFetched={messagesFetched}
          messagesFetching={messagesFetching}
        />
        <ChatFooter room={room} sendMessage={actions.sendMessage} />
      </Container>
    );
  }
}

Chat.propTypes = {
  actions: PropTypes.object.isRequired,

  rooms: PropTypes.array.isRequired,
  room: PropTypes.string.isRequired,
  roomsFetched: PropTypes.bool,
  roomsFetching: PropTypes.bool,

  messages: PropTypes.array.isRequired,
  messagesFetched: PropTypes.bool,
  messagesFetching: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  return {
    rooms: state.chatRooms.rooms,
    roomsFetched: state.chatRooms.fetched,
    roomsFetching: state.chatRooms.fetching,

    messages: state.chatMessages.messages,
    messagesFetched: state.chatMessages.fetched,
    messagesFetching: state.chatMessages.fetching,

    room: state.chatRoom
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);