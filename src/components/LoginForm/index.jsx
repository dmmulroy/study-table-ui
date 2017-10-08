import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
  email,
  password,
  handleOnChange,
  handleSubmit,
  isFetching
}) => (
  <div className="box">
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left">
        <input
          name="email"
          className="input is-large"
          type="email"
          value={email}
          onChange={handleOnChange}
        />
        <span className="icon is-left">
          <i className="fa fa-envelope" />
        </span>
      </div>
    </div>
    <div className="field">
      <label className="label">Password</label>
      <div className="control has-icons-left">
        <input
          name="password"
          className="input is-large"
          type="password"
          value={password}
          onChange={handleOnChange}
        />
        <span className="icon is-left">
          <i className="fa fa-lock" />
        </span>
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button
          className={
            isFetching
              ? 'button is-medium is-primary is-loading'
              : 'button is-medium is-primary'
          }
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
      <div className="control">
        <Link to="/auth/sign-up">
          <button className="button is-medium is-link">Sign up</button>
        </Link>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default LoginForm;
