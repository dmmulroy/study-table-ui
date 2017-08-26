import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import LoginForm from 'components/LoginForm';
import { login } from 'redux/modules/user';

class LoginFormContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    login(email, password);
  };

  render() {
    const { isFetching } = this.props;
    return (
      <LoginForm
        {...this.state}
        isFetching={isFetching}
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isFetching: user.isFetching
});

export default connect(mapStateToProps, {
  login
})(LoginFormContainer);
