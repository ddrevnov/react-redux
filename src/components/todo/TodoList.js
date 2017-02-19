import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';
import { List } from 'semantic-ui-react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, ASCENDING, DESCENDING } from '../../constants/actionTypes';

const TodoList = ({ todos, visibilityFilter, sort }) => {
  todos = [...todos];

  const descending = (a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  };

  const ascending = (a, b) => {
    return new Date(a.created).getTime() - new Date(b.created).getTime();
  };

  switch (visibilityFilter) {
    case SHOW_ALL: break;
    case SHOW_ACTIVE:
      todos = todos.filter(todo => !todo.completed); break;
    case SHOW_COMPLETED:
      todos = todos.filter(todo => todo.completed); break;
    default: break;
  }

  switch (sort) {
    case DESCENDING:
      todos = todos.sort(descending); break;
    case ASCENDING:
      todos = todos.sort(ascending); break;
    default: break;
  }

  return (
    <List className='todo-list' divided verticalAlign='middle'>
      {todos
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
  todos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string,
  sort: PropTypes.string,
};

export default TodoList;