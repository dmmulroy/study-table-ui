import React, { PureComponent } from 'react';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdate = event => {
      const { name, value } = event.target;
      props.handleUpdate({ name, value });
    };
  }

  render() {
    const { email, password, handleSubmit } = this.props;
    return (
      <div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              name="email"
              className="input is-large"
              type="email"
              value={email}
              onChange={this.handleUpdate}
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
              onChange={this.handleUpdate}
            />
            <span className="icon is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <a className="button is-medium is-primary" onClick={handleSubmit}>
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
