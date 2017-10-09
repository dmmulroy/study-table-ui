import React from 'react';
import PropTypes from 'prop-types';

const OrganizationIcon = ({ name }) => (
  <span
    style={{
      fontSize: '3em',
      padding: '5px',
      borderRadius: '5px',
      boxShadow:
        '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
      display: 'inline-block',
      minWidth: '85px',
      textAlign: 'center',
      lineHeight: '1em',
      marginRight: '5px'
    }}
  >
    {name.charAt(0)}
  </span>
);

OrganizationIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default OrganizationIcon;
