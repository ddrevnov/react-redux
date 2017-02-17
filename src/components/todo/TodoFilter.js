import React, {Component} from 'react';
import { Button, Segment } from 'semantic-ui-react';

class TodoFilter extends Component {

  handleFilter = (filter) => {
    let { filterTodos } = this.props;

    filterTodos(filter);
  };

  render() {
    return (
      <Segment>
        <Button.Group>
          <Button onClick={() => this.handleFilter('all')}>All</Button>
          <Button onClick={() => this.handleFilter('active')}>Active</Button>
          <Button onClick={() => this.handleFilter('completed')}>Completed</Button>
        </Button.Group>
      </Segment>
    );
  }
}

export default TodoFilter;