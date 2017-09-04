const axios = require('axios');

// Actions
const LOG_IN = 'study-table/user/LOG_IN';
const LOG_IN_SUCCESS = 'study-table/user/LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'study-table/user/LOG_IN_FAILURE';

// const REQUEST_USER = 'study-table/user/REQUEST';
// const REQUEST_USER_SUCCESS = 'study-table/user/REQUEST_SUCCESS';
// const REQUEST_USER_FAILURE = 'study-table/user/REQUEST_FAILURE';

// Reducer
const initialState = {
  data: null,
  isAuthenticated: false,
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { isFetching: true });
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        data: { ...action.user },
        isAuthenticated: true,
        isFetching: false
      });
    case LOG_IN_FAILURE:
      return Object.assign({}, state, { isFetching: false });
    default:
      return state;
  }
};

// Action Creators
export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: LOG_IN });
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3001/auth/login',
      data: { email, password }
    });

    const { token, user } = data;

    localStorage.setItem('token', token);

    dispatch({ type: LOG_IN_SUCCESS, user });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILURE });
  }
};

export const retrieveAuthenticatedUser = () => async dispatch => {
  try {
    console.log('here yo');
    dispatch({ type: LOG_IN });

    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({ type: LOG_IN_FAILURE });
      return;
    }

    const { data } = await axios({
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
      url: 'http://localhost:3001/api/user'
    });

    const { user } = data;
    dispatch({ type: LOG_IN_SUCCESS, user });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILURE });
  }
};
