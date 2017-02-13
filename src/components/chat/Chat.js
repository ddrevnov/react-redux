import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chatActions from './chatActions';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatFooter from './ChatFooter';

class Chat extends Component {

  componentWillMount() {
    this.props.actions.fetchRooms();
  }

  render() {
    const { rooms, messages, actions } = this.props;

    return (
      <div className="container">
        <ChatHeader
          rooms={rooms}
          fetchMessagesByRoom={actions.fetchMessagesByRoom} />
        <ChatList messages={messages} />
        <ChatFooter sendMessage={actions.sendMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  actions: PropTypes.object.isRequired,
  rooms: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    rooms: state.chatRooms,
    messages: state.chatMessages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);