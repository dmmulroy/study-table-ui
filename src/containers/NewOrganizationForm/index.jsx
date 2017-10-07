import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    // const { createNewOrganization } = this.props;
    // const { name } = this.state;
    // createNewOrganization(name);
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

export default NewOrganizationFormContainer;
