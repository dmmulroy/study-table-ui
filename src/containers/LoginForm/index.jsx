import React, { PureComponent } from 'react';

import LoginForm from 'components/LoginForm';

class LoginFormContainer extends PureComponent {
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
      <LoginForm
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleUpdate={this.handleUpdate}
      />
    );
  }
}
export default LoginFormContainer;
