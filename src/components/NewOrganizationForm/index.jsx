import React from 'react';
import { Link } from 'react-router-dom';

const NewOrganizationForm = ({
  name,
  handleOnChange,
  handleSubmit,
  isFetching = false
}) => (
  <div>
    <div className="field">
      <label className="label">Organization Name</label>
      <div className="control">
        <input
          name="name"
          className="input is-large"
          type="text"
          value={name}
          onChange={handleOnChange}
        />
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
          Submit
        </button>
      </div>
      <div className="control">
        <Link to="/organizations">
          <button className="button is-medium is-link">Organizations</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NewOrganizationForm;
