import React from 'react';
import PropTypes from 'prop-types';

const InputWithErrors = ({ error, children: InputComponent }) => (
  <div>
    {InputComponent}
    {error && <p className="help is-danger">{error}</p>}
  </div>
);

InputWithErrors.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
};

export default InputWithErrors;
