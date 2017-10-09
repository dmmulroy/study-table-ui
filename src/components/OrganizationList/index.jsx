import React from 'react';
import PropTypes from 'prop-types';

import OrganizationListItem from 'components/OrganizationListItem';

const OrganizationList = ({ organizations }) => (
  <div className="box content">
    <h1>Organization List</h1>
    <ul>
      {organizations.map(organization => (
        <OrganizationListItem
          key={organization.id}
          organization={organization}
        />
      ))}
    </ul>
  </div>
);

OrganizationList.propTypes = {
  organizations: PropTypes.array.isRequired
};

export default OrganizationList;
