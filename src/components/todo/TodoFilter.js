import React, {Component} from 'react';
import { Button, Segment, Dropdown } from 'semantic-ui-react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, ASCENDING, DESCENDING } from '../../constants/actionTypes';

class TodoFilter extends Component {

  handleFilter = (filter) => this.props.filterTodos(filter);

  handleSortBy = (e, data) => this.props.sortTodos(data.value);

  render() {
    const { visibilityFilter, sort } = this.props;

    return (
      <Segment.Group horizontal>

        <Segment>
          <Button.Group>
            <Button
              active={visibilityFilter === SHOW_ALL}
              onClick={() => this.handleFilter(SHOW_ALL)}>All</Button>
            <Button
              active={visibilityFilter === SHOW_ACTIVE}
              onClick={() => this.handleFilter(SHOW_ACTIVE)}>Active</Button>
            <Button
              active={visibilityFilter === SHOW_COMPLETED}
              onClick={() => this.handleFilter(SHOW_COMPLETED)}>Completed</Button>
          </Button.Group>
        </Segment>

        <Segment>
          <Dropdown text={sort} button labeled className='icon'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleSortBy} value={DESCENDING}>Descending</Dropdown.Item>
              <Dropdown.Item onClick={this.handleSortBy} value={ASCENDING}>Ascending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Segment>

      </Segment.Group>
    );
  }
}

export default TodoFilter;