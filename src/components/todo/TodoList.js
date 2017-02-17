import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';
import { List } from 'semantic-ui-react';

const TodoList = ({ todos }) => {

  const sortByDate = (a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  };

  return (
    <List className='todo-list' divided verticalAlign='middle'>
      {todos
        .sort(sortByDate)
        .map((todo, i) =>
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