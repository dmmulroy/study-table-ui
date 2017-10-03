import { combineReducers } from 'redux';

import user from 'redux/modules/user';
import organizations from 'redux/modules/organizations';

const rootReducer = combineReducers({ user, organizations });

export default rootReducer;
