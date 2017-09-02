import React, { Component } from 'react';
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
    isFetching: false
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
    const { history } = this.props;

    this.setState(() => ({ isFetching: true }));

    const { status } = await axios({
      method: 'post',
      url: 'http://localhost:3001/auth/sign-up',
      data: {
        ...this.state
      }
    });

    if (status === 200) history.push('/');
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

export default withRouter(SignUpFormContainer);
