import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import OrganizationList from 'containers/OrganizationList';
import NewOrganizationForm from 'containers/NewOrganizationForm';

const OrganizationManagement = ({ user, match }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Switch>
              <Route
                exact
                path={match.path}
                component={OrganizationList}
                user={user}
              />
              <Route
                path={`${match.path}/new`}
                component={NewOrganizationForm}
              />
              <Redirect to={match.path} />
            </Switch>
          </div>
        </div>
      </div>
    </section>
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
