import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';

class SigninPage extends Component {

  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.actions.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>Email: <Field name="email" component="input" className="form-control" type="email"/>
              </label>
            </fieldset>

            <fieldset className="form-group">
              <label>Password: <Field name="password" component="input" className="form-control" type="password"/>
              </label>
            </fieldset>
            {this.renderAlert()}
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

SigninPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.auth.error
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