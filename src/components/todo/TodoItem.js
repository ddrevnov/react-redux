import React, {PropTypes} from 'react';

const TodoItem = ({ completed, text, _id }) => {

  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className="list-group-item">
      { text }
    </li>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;