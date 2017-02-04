import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, i) =>
        <TodoItem
          key={i}
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