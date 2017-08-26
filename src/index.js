import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bulma/css/bulma.css';

import App from 'App';
import store from 'redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
