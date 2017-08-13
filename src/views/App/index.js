import React, { PureComponent } from 'react';

import LoginForm from 'containers/LoginForm';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  submitLogIn = (email, password) => {
    debugger;
    this.setState(() => ({ user: { email, password }, isLoggedIn: true }));
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h1 className="title">Study Table</h1>
              <h2 className="subtitle">A tool for tracking study hours</h2>
              <span className="icon is-large">
                <i className="fa fa-book" />
              </span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              {this.state.isLoggedIn
                ? <h1 className="title">
                    Successfully Logged In
                    <p>
                      <strong>
                        email: {this.state.user.email}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        password: {this.state.user.password}
                      </strong>
                    </p>
                  </h1>
                : <LoginForm submit={this.submitLogIn} />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
