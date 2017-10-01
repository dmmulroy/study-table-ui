import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { retrieveAuthenticatedUser } from 'redux/modules/user';
import Initializing from 'views/Initializing';
import Login from 'views/Login';
import Authenticated from 'views/Authenticated';

class App extends Component {
  componentDidMount() {
    const { retrieveAuthenticatedUser } = this.props;

    retrieveAuthenticatedUser();
  }

  render() {
    const { isFetching, isAuthenticated, firstFetchPerformed } = this.props;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (isFetching || !firstFetchPerformed) return <Initializing />;
            return isAuthenticated ? (
              <Authenticated />
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
  isFetching: user.isFetching,
  isAuthenticated: user.isAuthenticated,
  firstFetchPerformed: user.firstFetchPerformed
});

export default withRouter(
  connect(mapStateToProps, { retrieveAuthenticatedUser })(App)
);
