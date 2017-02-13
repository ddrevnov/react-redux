import React, {PropTypes} from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  InputGroup} from 'react-bootstrap';

const ChatFooter = ({ sendMessage }) => {
  return (
    <form>
      <FormGroup>
        <InputGroup>

          <FormControl type="text" />

          <InputGroup.Button>
            <Button bsStyle="success">Send</Button>
          </InputGroup.Button>

        </InputGroup>
      </FormGroup>
    </form>
  );
};

ChatFooter.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default ChatFooter;