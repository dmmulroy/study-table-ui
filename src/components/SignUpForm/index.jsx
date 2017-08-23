import React from 'react';

const SignUpForm = ({ firstName, lastName, email, password, handleOnChange, handleSubmit, toggleSignUp }) => (
  <div>
    <div className="field">
      <label className="label">First Name</label>
      <div className="control">
        <input
         name="firstName"
         className="input is-large"
         type="text"
         value={firstName}
         onChange={handleOnChange}
       />
      </div>
    </div>
    <div className="field">
      <label className="label">Last Name</label>
      <div className="control">
        <input
         name="lastName"
         className="input is-large"
         type="text"
         value={lastName}
         onChange={handleOnChange}
       />
      </div>
    </div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input
         name="email"
         className="input is-large"
         type="email"
         value={email}
         onChange={handleOnChange}
       />
      </div>
    </div>
    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input
         name="password"
         className="input is-large"
         type="password"
         value={password}
         onChange={handleOnChange}
       />
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-medium is-primary" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="control">
        <button className="button is-medium is-link" onClick={toggleSignUp}>
          Back to login
        </button>
      </div>
    </div>
  </div>
);

export default SignUpForm;
