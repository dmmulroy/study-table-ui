import React, { PureComponent } from 'react';
import axios from 'axios';

import Login from 'views/Login';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      user: {
        email: '',
        password: '',
        token: ''
      }
    };
  }

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

    this.setState(() => ({
      user: { email, password, token },
      authenticated: true
    }));
  };

  render() {
    return <Login {...this.state} submit={this.submitLogIn} />;
  }
}

export default App;
