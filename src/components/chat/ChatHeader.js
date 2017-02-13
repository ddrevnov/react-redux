import React, {PropTypes, Component} from 'react';
import {
  Navbar,
  Nav,
  MenuItem,
  NavDropdown} from 'react-bootstrap';

class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: 'Select room'
    };
  }

  handleRoomChange(eventKey) {
    let { fetchMessagesByRoom } = this.props;
    let selectedRoom = {};

    this.props.rooms.forEach((room) => {
      if (room._id === eventKey) {
        selectedRoom = room;
      }
    });

    this.setState({
      selectedRoom: selectedRoom.name
    });

    fetchMessagesByRoom(selectedRoom._id);
  }

  render() {
    const { rooms } = this.props;

    const roomList = (
      rooms.map((room, i) => {
        return <MenuItem
          eventKey={room._id}
          key={room._id}>
          {room.name}
          </MenuItem>
      })
    );

    return (
      <Navbar inverse onSelect={this.handleRoomChange.bind(this)}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Chat</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown
              title={this.state.selectedRoom}
              id="basic-nav-dropdown">
              {roomList}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

ChatHeader.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default ChatHeader;