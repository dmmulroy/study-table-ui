import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginForm from 'components/LoginForm';
import { login } from 'redux/modules/user';

class LoginFormContainer extends Component {
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

  handleSubmit = async () => {
    const { email, password } = this.state;
    const { login, history } = this.props;
    await login(email, password);
    history.push('/');
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

LoginFormContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user }) => ({
  isFetching: user.isFetching
});

export default withRouter(
  connect(mapStateToProps, {
    login
  })(LoginFormContainer)
);
