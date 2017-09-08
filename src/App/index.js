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
    const { isInitializing, isAuthenticated } = this.props;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (isInitializing) return <div>Loading...</div>;
            return isAuthenticated ? (
              <div>Dashboard</div>
            ) : (
              <Redirect to="/auth/login" />
            );
          }}
        />
        <Route path="/auth" component={Login} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isInitializing: user.isInitializing,
  isAuthenticated: user.isAuthenticated
});

export default withRouter(
  connect(mapStateToProps, { retrieveAuthenticatedUser })(App)
);
