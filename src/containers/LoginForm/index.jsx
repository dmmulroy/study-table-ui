import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from 'components/LoginForm';

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleUpdate = ({ name, value }) => {
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { submit } = this.props;
    submit(email, password);
  };

  render() {
    return (
      <Route
        exact
        path="/"
        render={props =>
          <LoginForm
            {...this.state}
            {...this.props}
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
          />}
      />
    );
  }
}

export default LoginFormContainer;
