import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InputWithErrors from 'components/InputWithErrors';

const SignUpForm = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  submitted,
  isValid,
  isFetching,
  handleOnChange,
  handleOnBlur,
  handleSubmit
}) => (
  <div className="box">
    <div className="field">
      <label className="label">First Name</label>
      <div className="control">
        <InputWithErrors error={firstName.error}>
          <input
            name="firstName"
            className="input is-large"
            type="text"
            value={firstName.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </InputWithErrors>
      </div>
    </div>
    <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
        <InputWithErrors error={lastName.error}>
          <input
            name="lastName"
            className="input is-large"
            type="text"
            value={lastName.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </InputWithErrors>
      </div>
    </div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <InputWithErrors error={email.error}>
          <input
            name="email"
            className="input is-large"
            type="email"
            value={email.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </InputWithErrors>
      </div>
    </div>
    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <InputWithErrors error={password.error}>
          <input
            name="password"
            className="input is-large"
            type="password"
            value={password.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </InputWithErrors>
      </div>
    </div>
    <div className="field">
      <label className="label">Confirm Password</label>
      <div className="control">
        <InputWithErrors error={confirmPassword.error}>
          <input
            name="confirmPassword"
            className="input is-large"
            type="password"
            value={confirmPassword.value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </InputWithErrors>
      </div>
    </div>
    {submitted &&
      !isValid && (
        <div style={{ margin: 5 }}>
          <p className="help is-danger">
            Please complete the form and submit again
          </p>
        </div>
      )}
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-medium is-primary" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="control">
        <Link to="/">
          <button className="button is-medium is-link">Back to login</button>
        </Link>
      </div>
    </div>
  </div>
);

SignUpForm.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
