import React from 'react';
import { connect } from 'react-redux';

const OrganizationManagement = ({ user }) => <div>Org Mgmt</div>;

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(OrganizationManagement);
