import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OrganizationManagement = ({ user }) => <div>Org Mgmt</div>;

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

export default connect(mapStateToProps)(OrganizationManagement);
