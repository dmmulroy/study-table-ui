import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createOrganization } from 'redux/modules/organizations';
import NewOrganizationForm from 'components/NewOrganizationForm';

class NewOrganizationFormContainer extends Component {
  state = {
    name: ''
  };

  handleOnChange = ({ target }) => {
    const { name, value } = target;

    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = () => {
    const { createOrganization } = this.props;
    const { name } = this.state;
    createOrganization(name);
  };

  render() {
    return (
      <NewOrganizationForm
        name={this.state.name}
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(() => ({}), { createOrganization })(
  NewOrganizationFormContainer
);
