import React from 'react';

const LoginForm = () =>
  <div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left">
        <input className="input is-large" type="email" />
        <span className="icon is-left">
          <i className="fa fa-envelope" />
        </span>
      </div>
    </div>
    <div className="field">
      <label className="label">Password</label>
      <div className="control has-icons-left">
        <input className="input is-large" type="password" />
        <span className="icon is-left">
          <i className="fa fa-lock" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <a href="http://localhost:3000" className="button is-medium is-primary">
          Login
        </a>
      </div>
    </div>
  </div>;

export default LoginForm;
