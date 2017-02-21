import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from './authActions';
import Social from '../common/Social';
import { Container, Form, Button } from 'semantic-ui-react';

class SigninPage extends Component {

  handleFormSubmit({email, password}) {
    this.props.actions.signinUser({ type: 'local', email, password });
  }

  renderAlert() {
    if (this.props.auth.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.auth.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, actions } = this.props;

    return (
      <Container>

        <Social signinUser={actions.signinUser} />

        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <Form.Field>
            <label>Email:</label>
            <Field name="email" component="input" className="form-control" type="email"/>
          </Form.Field>

          <Form.Field>
            <label>Password:</label>
            <Field name="password" component="input" className="form-control" type="password"/>
          </Form.Field>

          {this.renderAlert()}
          <Button color="green" type="submit">Sign In</Button>
        </Form>
      </Container>
    );
  }
}

SigninPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

SigninPage = reduxForm({
 form: 'signin'
})(SigninPage);
SigninPage = connect(mapStateToProps, mapDispatchToProps)(SigninPage);

export default SigninPage;