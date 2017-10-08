import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestUserOrganizations } from 'redux/modules/organizations';

class OrganizationList extends Component {
  componentDidMount() {
    const { requestUserOrganizations, user } = this.props;
    requestUserOrganizations(user.data.id);
  }
  render() {
    const { organizations } = this.props;
    const { data } = organizations;

    return (
      <ul>
        {Object.values(data).map(organization => (
          <li key={organization.id}>{organization.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ organizations, user }) => ({
  organizations,
  user
});

export default withRouter(
  connect(mapStateToProps, { requestUserOrganizations })(OrganizationList)
);
