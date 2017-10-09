import React from 'react';
import PropTypes from 'prop-types';

import OrganizationIcon from 'components/OrganizationIcon';

const OrganizationListItem = ({ organization }) => (
  <li className="box" style={{ display: 'flex', alignItems: 'center' }}>
    <OrganizationIcon name={organization.name} />
    <p
      style={{
        display: 'flex',
        flex: '1',
        marginLeft: '5px',
        fontSize: '1.5em'
      }}
    >
      {organization.name}
    </p>
  </li>
);

OrganizationListItem.propTypes = {
  organization: PropTypes.object.isRequired
};

export default OrganizationListItem;
