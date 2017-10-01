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
  isFetching: false,
  firstFetchPerformed: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { isFetching: true });
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        isAuthenticated: true,
        isFetching: false
      });
    case LOG_IN_FAILURE:
      return Object.assign({}, state, {
        ...action.payload,
        isFetching: false
      });
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

    dispatch({ type: LOG_IN_SUCCESS, payload: { data: { user } } });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILURE });
  }
};

export const retrieveAuthenticatedUser = () => async dispatch => {
  try {
    dispatch({ type: LOG_IN });

    const token = localStorage.getItem('token');

    if (!token) {
      return dispatch({
        type: LOG_IN_FAILURE,
        payload: { firstFetchPerformed: true }
      });
    }

    const { data } = await axios({
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
      url: 'http://localhost:3001/api/user'
    });

    const { user } = data;

    dispatch({
      type: LOG_IN_SUCCESS,
      payload: {
        data: { ...user },
        firstFetchPerformed: true
      }
    });
  } catch (err) {
    dispatch({ type: LOG_IN_FAILURE, payload: { firstFetchPerformed: true } });
  }
};
