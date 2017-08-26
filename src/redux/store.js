import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from 'redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

if (module.hot) {
  module.hot.accept('./rootReducer', () =>
    store.replaceReducer(require('./rootReducer'))
  );
}

export default store;
