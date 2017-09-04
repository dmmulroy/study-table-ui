import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginForm from 'containers/LoginForm';
import SignUpForm from 'containers/SignUpForm';

const LoginView = props => (
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
          <Switch>
            {props.isAuthenticated && <Redirect to="/" />}
            <Route path="/login" component={LoginForm} />
            <Route path="/sign-up" component={SignUpForm} />
          </Switch>
        </div>
      </div>
    </div>
  </section>
);

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated
});

export default connect(mapStateToProps)(LoginView);
