import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul className="list-group">
      {todos.map(todo =>
        <TodoItem
          key={todo._id}
          {...todo}
          onClick={() => onTodoClick(todo._id)}
        />
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;