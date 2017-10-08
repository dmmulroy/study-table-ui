import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';

import SignUpForm from 'components/SignUpForm';

const labelMap = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email'
};

class SignUpFormContainer extends Component {
  state = {
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    submitted: false,
    isValid: false,
    isFetching: false
  };

  _formIsValid = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;

    const isValid = [
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    ].every(
      ({ value, error }) =>
        !validator.isEmpty(value) && validator.isEmpty(error)
    );

    return isValid;
  };

  _validateField = (name, value) => {
    switch (name) {
      case 'email': {
        if (validator.isEmpty(value)) return 'Email may not be empty';

        return validator.isEmail(value) ? '' : 'Invalid email address';
      }
      case 'password': {
        const { confirmPassword } = this.state;

        if (validator.isEmpty(value)) {
          return 'Password may not be empty';
        } else if (
          !validator.isEmpty(confirmPassword.value) &&
          confirmPassword.value !== value
        ) {
          return "Passwords dont' match";
        } else {
          return '';
        }
      }
      case 'confirmPassword': {
        const { password } = this.state;

        if (validator.isEmpty(value)) {
          return 'Password confirmation may not be empty';
        } else if (
          !validator.isEmpty(password.value) &&
          password.value !== value
        ) {
          return "Passwords don't match";
        } else {
          return '';
        }
      }
      default:
        return validator.isEmpty(value)
          ? `${labelMap[name]} may not be empty`
          : '';
    }
  };

  _revalidatePasswordFields = () => {
    const { password, confirmPassword } = this.state;

    if (
      validator.isEmpty(password.value) ||
      validator.isEmpty(confirmPassword.value)
    )
      return;

    if (password.value === confirmPassword.value) {
      this.setState(() => ({
        password: {
          ...password,
          error: ''
        },
        confirmPassword: {
          ...confirmPassword,
          error: ''
        }
      }));
    }
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    const error = this._validateField(name, validator.trim(value));
    this.setState(
      () => ({ [name]: { value, error } }),
      () => {
        if (name === 'password' || name === 'confirmPassword')
          this._revalidatePasswordFields();
      }
    );
  };

  handleSubmit = async () => {
    try {
      const isValid = this._formIsValid();

      if (!isValid) {
        this.setState(() => ({
          submitted: true,
          isValid
        }));
        return;
      }

      const { history } = this.props;

      this.setState(() => ({ isFetching: true }));

      const { status } = await axios({
        method: 'put',
        url: 'http://localhost:3001/auth/sign-up',
        data: {
          firstName: this.state.firstName.value,
          lastName: this.state.lastName.value,
          email: this.state.email.value,
          password: this.state.password.value
        }
      });

      if (status === 200) history.push('/');
    } catch (err) {
      console.log('err', err);
    }
  };

  render() {
    return (
      <SignUpForm
        {...this.state}
        handleOnChange={this.handleOnChange}
        handleOnBlur={this.handleOnChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

SignUpFormContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SignUpFormContainer);
