import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { retrieveAuthenticatedUser } from 'redux/modules/user';
import Initializing from 'views/Initializing';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import OrganizationManagement from 'views/OrganizationManagement';

class App extends Component {
  componentDidMount() {
    const { retrieveAuthenticatedUser } = this.props;

    retrieveAuthenticatedUser();
  }

  indexRedirect = () => {
    const { user = {} } = this.props;
    const { isAuthenticated, defaultOrganizationId } = user;

    if (!isAuthenticated) return <Redirect to="/auth/login" />;

    return defaultOrganizationId ? (
      <Redirect to={`/dashboard/${defaultOrganizationId}`} />
    ) : (
      <Redirect to="organizations" />
    );
  };

  render() {
    const { user } = this.props;
    const { isAuthenticated, isFetching, firstFetchPerformed } = user;
    const inititalizing = isFetching || !firstFetchPerformed;

    return inititalizing ? (
      <Initializing />
    ) : (
      <Switch>
        <Route exact path="/" render={this.indexRedirect} />
        <Route path="/auth" component={Login} />
        {!isAuthenticated && <Redirect to="/auth/login" />}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/organizations" component={OrganizationManagement} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default withRouter(
  connect(mapStateToProps, { retrieveAuthenticatedUser })(App)
);
