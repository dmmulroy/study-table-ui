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
      <div className="box content">
        <h1>Your Organizations</h1>
        <ul>
          {Object.values(data).map(organization => (
            <li
              key={organization.id}
              className="box"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
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
                {organization.name.charAt(0)}
              </span>
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
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ organizations, user }) => ({ organizations, user });

export default withRouter(
  connect(mapStateToProps, { requestUserOrganizations })(OrganizationList)
);
