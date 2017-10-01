import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import TeamManagement from 'views/TeamManagement';

const AuthenticatedView = ({ user }) => {
  const { isAuthenticated, defaultOrganization } = user;
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  } else if (defaultOrganization) {
    return <Dashboard />;
  } else {
    return <TeamManagement />;
  }
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(AuthenticatedView);
