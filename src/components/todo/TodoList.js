import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map(todo =>
        <TodoItem
          key={todo._id}
          {...todo}
        />
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;