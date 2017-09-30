import React from 'react';

const Spinner = () => (
  <div className="container" style={{ height: '100vh' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit'
      }}
    >
      <span className="icon is-large">
        <i className="fa fa-refresh fa-spin" />
        <span className="sr-only">Loading...</span>
      </span>
    </div>
  </div>
);

export default Spinner;
