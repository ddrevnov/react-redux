import React, {PropTypes, Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './authActions';
import { Form, Button, Label, Container } from 'semantic-ui-react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Field>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && (error && <Label basic color='red' pointing>{error}</Label>)}
  </Form.Field>
);

class SignupPage extends Component {

  handleFormSubmit(formProps) {
    this.props.actions.signupUser(formProps);
  }

  errorAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Container>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <Field
            name="email"
            component={renderField}
            label="Email"
            type="email"/>

          <Field
            name="password"
            component={renderField}
            label="Password"
            type="password"/>

          <Field
            name="passwordConfirm"
            component={renderField}
            label="Confirm password"
            type="password"/>

          {this.errorAlert()}

          <Button
            color="green"
            disabled={submitting}
            type="submit">Sign Up</Button>
          <Button
            color="red"
            type="button"
            disabled={pristine || submitting} onClick={reset}>Clear Values</Button>

        </Form>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirm';
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = 'Password must match';
  }

  return errors;
}

SignupPage.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

SignupPage = reduxForm({
  form: 'signup',
  validate
})(SignupPage);
SignupPage = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default SignupPage;