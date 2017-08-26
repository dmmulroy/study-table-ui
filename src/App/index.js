import React, { PureComponent } from 'react';
import axios from 'axios';

import Login from 'views/Login';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      signUp: false,
      user: {
        email: '',
        password: '',
        token: ''
      }
    };
  }

  toggleSignUp = () => {
    this.setState(({ signUp }) => ({ signUp: !signUp }));
  };

  submitLogIn = async (email, password) => {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3001/auth/login',
      data: {
        email,
        password
      }
    });

    const { token } = data;

    localStorage.setItem('token', token);

    this.setState(() => ({
      user: { email, password, token },
      authenticated: true
    }));
  };

  render() {
    return (
      <Login
        {...this.state}
        submit={this.submitLogIn}
        toggleSignUp={this.toggleSignUp}
      />
    );
  }
}

export default App;
