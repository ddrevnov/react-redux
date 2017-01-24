import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/todoActions';

const TodoItem = ({ completed, text, _id, dispatch }) => {

  const renderText = (editMode) => {
    let textTag;

    if (!editMode) {
      textTag = <span>{ text }</span>;
    } else {
      textTag = <input type="text" defaultValue={text}/>;
    }

    return textTag;
  };

  const generateText = () => {
    let editMode = false;

    return (
      <div
        onDoubleClick={() => {
          editMode = !editMode;
        }}
        className="col-md-11">
        {renderText(editMode)}
      </div>
    );
  };

  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className="list-group-item row">
      {generateText()}
      <div className="col-md-1">
        <button
          onClick={() => {
            dispatch(actions.deleteTodo(_id));
          }}
          className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect()(TodoItem);