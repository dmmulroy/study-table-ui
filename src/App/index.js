import React, { PureComponent } from 'react';

import Login from 'views/Login';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      user: {}
    };
  }

  submitLogIn = (email, password) =>
    this.setState(() => ({ user: { email, password }, authenticated: true }));

  render() {
    return <Login {...this.state} submit={this.submitLogIn} />;
  }
}

export default App;
