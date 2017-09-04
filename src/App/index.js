import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { retrieveAuthenticatedUser } from 'redux/modules/user';
import Login from 'views/Login';

class App extends Component {
  componentDidMount() {
    const { retrieveAuthenticatedUser } = this.props;

    retrieveAuthenticatedUser();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated ? <h1>Dashboard</h1> : <Redirect to="/login" />}
        />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Login} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated
});

export default withRouter(
  connect(mapStateToProps, { retrieveAuthenticatedUser })(App)
);
