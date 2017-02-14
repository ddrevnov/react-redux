import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';
import { List } from 'semantic-ui-react';

const TodoList = ({ todos }) => {
  return (
    <List divided verticalAlign='middle'>
      {todos.map((todo, i) =>
        <TodoItem
          key={i}
          {...todo}
        />
      )}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;