import React, {PropTypes} from 'react';

const TodoItem = ({ completed, text, onClick, _id }) => {

  return (
    <li
      onClick={onClick(_id)}
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
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;