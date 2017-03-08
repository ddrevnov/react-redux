import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from './todoActions';
import TodoList from './TodoList';
import { Field, reduxForm } from 'redux-form';
import { Grid, Container, Header, Form, Button } from 'semantic-ui-react';
import TodoFilter from './TodoFilter';

import './todo.scss';

class TodoPage extends Component {

  componentWillMount() {
    this.props.actions.fetchTodos();
  }

  addTodo(formProps) {
    let text = formProps.todoText;

    if (!text) return;

    let todo = {
      text,
      completed: false
    };

    this.props.actions.addTodo(todo);
    this.props.reset('addTodoForm');
  }

  render() {
    const {handleSubmit, todos, submitting, pristine, actions, visibilityFilter, sort} = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Container>
              <Header as="h1">Todo page</Header>
              <Form onSubmit={handleSubmit(::this.addTodo)}>

                <Grid columns='equal'>
                  <Grid.Column width={15}>
                    <Form.Field>
                      <Field
                        name="todoText"
                        component="input"
                        type="text"
                        placeholder="Add todo" />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button
                      floated='right'
                      color="green"
                      disabled={pristine || submitting}>Add</Button>
                  </Grid.Column>
                </Grid>

              </Form>
              <TodoList
                todos={todos}
                visibilityFilter={visibilityFilter}
                sort={sort}/>
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Container>
              <TodoFilter
                visibilityFilter={visibilityFilter}
                sort={sort}
                filterTodos={actions.filterTodos}
                sortTodos={actions.sortTodos}/>
            </Container>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

TodoPage.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    sort: state.sort
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

TodoPage = reduxForm({
  form: 'addTodoForm'
})(TodoPage);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);