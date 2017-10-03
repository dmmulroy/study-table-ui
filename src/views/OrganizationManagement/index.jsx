import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import OrganizationList from 'containers/OrganizationList';

const CreateOrganizationForm = () => <div>Create</div>;
// const OrganizationList = () => <div>Org List</div>;

const OrganizationManagement = ({ user, match }) => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path={match.path}
          component={OrganizationList}
          user={user}
        />
        <Route path={`${match.path}/new`} component={CreateOrganizationForm} />
        <Redirect to={match.path} />
      </Switch>
    </div>
  );
};

OrganizationManagement.propTypes = {
  user: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        defaultOrganizationId: PropTypes.string
      }),
      PropTypes.shape({})
    ]),
    isAuthenticated: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    firstFetchPerformed: PropTypes.bool.isRequired
  })
};

const mapStateToProps = ({ user }) => ({ user });

export default withRouter(connect(mapStateToProps)(OrganizationManagement));
