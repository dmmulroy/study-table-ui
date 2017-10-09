import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestUserOrganizations } from 'redux/modules/organizations';
import OrganizationList from 'components/OrganizationList';

class OrganizationListContainer extends Component {
  componentDidMount() {
    const { requestUserOrganizations, user } = this.props;
    requestUserOrganizations(user.data.id);
  }

  render() {
    const { organizations } = this.props;
    const { data } = organizations;

    return <OrganizationList organizations={Object.values(data)} />;
  }
}

const mapStateToProps = ({ organizations, user }) => ({ organizations, user });

export default withRouter(
  connect(mapStateToProps, { requestUserOrganizations })(
    OrganizationListContainer
  )
);
