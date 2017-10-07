import React, { Component } from 'react';
import { connect } from 'react-redux';

const NewOrganizationForm = props => (
  <div>{JSON.stringify(props, null, 2)}</div>
);

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
    //  const { name } = this.state;
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
