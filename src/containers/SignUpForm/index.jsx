import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import SignUpForm from 'components/SignUpForm';

class SignUpFormContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isFetching: false
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
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
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(SignUpFormContainer);
