import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from 'views/Login';

const App = props => (props.isAuthenticated ? <p>Authenticated</p> : <Login />);

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
