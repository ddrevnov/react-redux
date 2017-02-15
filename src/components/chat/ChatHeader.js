import React, {PropTypes, Component} from 'react';
import { Menu, Dropdown, Input } from 'semantic-ui-react';

class ChatHeader extends Component {
  state = {
    selectedRoom: 'Select room'
  };

  handleNameChange = (e, data) => {
    let { changeChatName } = this.props;
    changeChatName(data.value);
  };

  handleRoomChange = (e, data) => {
    let { fetchMessagesByRoom, rooms, changeRoom } = this.props;
    let roomId = data.value;
    let selectedRoom = {};

    rooms.forEach((room) => {
      if (room._id === roomId) {
        selectedRoom = room;
      }
    });

    this.setState({
      selectedRoom: selectedRoom.name
    });

    localStorage.setItem('room', selectedRoom.name);

    changeRoom(selectedRoom.name);
    fetchMessagesByRoom(selectedRoom.name);
  };

  render() {
    const { rooms, room } = this.props;

    const roomList = (
      rooms.map(room => {
        return <Dropdown.Item
          onClick={this.handleRoomChange}
          value={room._id}
          key={room._id}>
          {room.name}
          </Dropdown.Item>
      })
    );

    return (
      <Menu>
        <Menu.Item>
          <Input
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