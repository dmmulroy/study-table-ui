import React from 'react';
import LoginForm from 'containers/LoginForm';

const LoginView = props =>
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
          {props.authenticated
            ? <h1 className="title">
                Successfully Logged In
                <p>
                  <strong>
                    email: {props.user.email}
                  </strong>
                </p>
                <p>
                  <strong>
                    password: {props.user.password}
                  </strong>
                </p>
                <p>
                  <strong>
                    token: {props.user.token}
                  </strong>
                </p>
              </h1>
            : <LoginForm submit={props.submit} />}
        </div>
      </div>
    </div>
  </section>;

export default LoginView;
