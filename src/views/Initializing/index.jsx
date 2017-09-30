import React from 'react';

import Spinner from 'components/Spinner';

const Initializing = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
  >
    <Spinner />
  </div>
);

export default Initializing;
