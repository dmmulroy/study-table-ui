import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  createOrganization,
  CREATE_ORGANIZATION_SUCCESS
} from 'redux/modules/organizations';
import NewOrganizationForm from 'components/NewOrganizationForm';

class NewOrganizationFormContainer extends Component {
  state = {
    name: ''
  };

  handleOnChange = ({ target }) => {
    const { name, value } = target;

    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = async () => {
    const { createOrganization, history } = this.props;
    const { name } = this.state;
    const { type } = await createOrganization(name);

    if (type === CREATE_ORGANIZATION_SUCCESS) history.push('/organizations');
  };

  render() {
    const { isFetching } = this.props;
    const { name } = this.state;
    return (
      <NewOrganizationForm
        name={name}
        isFetching={isFetching}
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ organizations }) => ({
  isFetching: organizations.isFetching
});

export default connect(mapStateToProps, { createOrganization })(
  NewOrganizationFormContainer
);
