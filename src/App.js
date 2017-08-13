import React, { PureComponent } from 'react';

class App extends PureComponent {
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
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input is-large" type="email" />
                  <span className="icon is-left">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input className="input is-large" type="password" />
                  <span className="icon is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <a
                    href="http://localhost:3000"
                    className="button is-medium is-primary"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
