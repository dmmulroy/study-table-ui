import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import LoginForm from 'containers/LoginForm';
import SignUpForm from 'containers/SignUpForm';

const LoginView = props =>
  props.isAuthenticated || !props.firstFetchPerformed ? (
    <Redirect to="/" />
  ) : (
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
              <Route path={`${props.match.path}/login`} component={LoginForm} />
              <Route
                path={`${props.match.path}/sign-up`}
                component={SignUpForm}
              />
              <Redirect to={`${props.match.path}/login`} />
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );

LoginView.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  firstFetchPerformed: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
  firstFetchPerformed: user.firstFetchPerformed
});

export default withRouter(connect(mapStateToProps)(LoginView));
