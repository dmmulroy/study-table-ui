import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Login from 'views/Login';

const App = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={() =>
        props.isAuthenticated ? <h1>Dashboard</h1> : <Redirect to="/login" />}
    />
    <Route path="/login" component={Login} />
    <Route path="/sign-up" component={Login} />
  </Switch>
);

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
