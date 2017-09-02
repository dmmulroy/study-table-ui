import React from 'react';

const InputWithErrors = ({ error, children: InputComponent }) => (
  <div>
    {InputComponent}
    {error ? <p className="help is-danger">{error}</p> : null}
  </div>
);

export default InputWithErrors;
