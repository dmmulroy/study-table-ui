import React, { PureComponent } from 'react';
import axios from 'axios';

import SignUpForm from 'components/SignUpForm';

class SignUpFormContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  }

  handleSubmit = () => {
    const { toggleSignUp } = this.props;

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/user',
      data: {
        ...this.state
      }
    });

    toggleSignUp();
  }

  render() {
    return (
      <SignUpForm
        {...this.state}
        {...this.props}
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpFormContainer;
