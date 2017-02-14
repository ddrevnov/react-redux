import React, {PropTypes, Component} from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

class ChatHeader extends Component {
  state = {
    selectedRoom: 'Select room'
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

    changeRoom(selectedRoom._id);
    fetchMessagesByRoom(selectedRoom._id);
  };

  render() {
    const { rooms } = this.props;

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
        <Menu.Item>Chat</Menu.Item>
        <Menu.Menu position="right">
          <Dropdown
            item text='Select room'>
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