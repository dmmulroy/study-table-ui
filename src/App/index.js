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

  renderIndex = () => {
    const { user = {} } = this.props;
    const { isAuthenticated, defaultOrganizationId } = user;

    if (!isAuthenticated) return <Redirect to="/auth/login" />;

    return defaultOrganizationId ? <Dashboard /> : <OrganizationManagement />;
  };

  render() {
    const { user } = this.props;
    const { isFetching, firstFetchPerformed } = user;

    return isFetching || !firstFetchPerformed ? (
      <Initializing />
    ) : (
      <Switch>
        <Route exact path="/" render={this.renderIndex} />
        <Route path="/auth" component={Login} />
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
