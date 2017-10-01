import React from 'react';

import Spinner from 'components/Spinner';

const InitializingView = () => (
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

export default InitializingView;
