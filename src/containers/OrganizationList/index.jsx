import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestUserOrganizations } from 'redux/modules/organizations/actions';

class OrganizationList extends Component {
  componentDidMount() {
    const { requestUserOrganizations } = this.props;
  }
  render() {
    const { organizations } = this.props;

    return;
    <ul>
      <li>one item</li>
      {organizations.map(organization => <li>organization.name</li>)}
    </ul>;
  }
}

const mapStateToProps = ({ organizations }) => ({
  organizations
});

export default withRouter(
  connect(mapStateToProps, { requestUserOrganizations })(OrganizationList)
);
