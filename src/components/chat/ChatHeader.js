import React, {PropTypes, Component} from 'react';
import { Menu, Dropdown, Input } from 'semantic-ui-react';
import { socket } from '../../constants/appConstants';

class ChatHeader extends Component {

  handleNameChange = (e, data) => {
    let { changeChatName } = this.props;
    changeChatName(data.value);
    localStorage.setItem('chatName', data.value);
  };

  handleRoomChange = (e, data) => {

    let { fetchMessagesByRoom, rooms, room, changeRoom } = this.props;
    let roomName = data.value;
    let selectedRoom = '';

    rooms.forEach((room) => {
      if (room.name === roomName) {
        selectedRoom = room.name;
      }
    });

    localStorage.setItem('room', selectedRoom);
    changeRoom(selectedRoom);

    socket.emit('switch room', {
      oldRoom: room,
      newRoom: selectedRoom
    });

    fetchMessagesByRoom(selectedRoom);
  };

  render() {
    const { rooms, room, chatName } = this.props;

    const roomList = (
      rooms.map(room => {
        return <Dropdown.Item
          onClick={this.handleRoomChange}
          value={room.name}
          key={room._id}>
          {room.name}
          </Dropdown.Item>
      })
    );

    return (
      <Menu>
        <Menu.Item>
          <Input
            value={chatName}
            onChange={this.handleNameChange}
            placeholder="Enter your chat name..."/>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown
            item text={room}>
            <Dropdown.Menu>
              {roomList}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

ChatHeader.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default ChatHeader;