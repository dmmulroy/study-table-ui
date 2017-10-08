const axios = require('axios');
const merge = require('lodash.merge');

// Actions
export const REQUEST_USER_ORGANIZATIONS =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS';
export const REQUEST_USER_ORGANIZATIONS_SUCCESS =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS_SUCCESS';
export const REQUEST_USER_ORGANIZATIONS_FAILURE =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS_FAILURE';

export const CREATE_ORGANIZATION =
  'study-table/organizations/CREATE_ORGANIZATION';
export const CREATE_ORGANIZATION_SUCCESS =
  'study-table/organizations/CREATE_ORGANIZATION_SUCCESS';
export const CREATE_ORGANIZATION_FAILURE =
  'study-table/organizations/CREATE_ORGANIZATION_FAILURE';

// Reducer
const initialState = {
  data: {},
  isFetching: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_ORGANIZATIONS:
    case CREATE_ORGANIZATION:
      return { ...state, isFetching: true };
    case CREATE_ORGANIZATION_SUCCESS:
    case REQUEST_USER_ORGANIZATIONS_SUCCESS:
      return merge({}, state, action.payload, { isFetching: false });
    case REQUEST_USER_ORGANIZATIONS_FAILURE:
    case CREATE_ORGANIZATION_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

// Action Creators
export const requestUserOrganizations = userId => async dispatch => {
  try {
    dispatch({ type: REQUEST_USER_ORGANIZATIONS });

    const token = localStorage.getItem('token');

    if (!token) return dispatch({ type: REQUEST_USER_ORGANIZATIONS_FAILURE });

    const { data } = await axios({
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
      url: `http://localhost:3001/api/user/${userId}/organizations`
    });

    dispatch({
      type: REQUEST_USER_ORGANIZATIONS_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    dispatch({ type: REQUEST_USER_ORGANIZATIONS_FAILURE });
  }
};

export const createOrganization = name => async dispatch => {
  try {
    dispatch({ type: CREATE_ORGANIZATION });

    const token = localStorage.getItem('token');

    if (!token) return dispatch({ type: CREATE_ORGANIZATION_FAILURE });

    const { data } = await axios({
      method: 'put',
      headers: { Authorization: `Bearer ${token}` },
      url: 'http://localhost:3001/api/organization',
      data: { name }
    });

    return dispatch({ type: CREATE_ORGANIZATION_SUCCESS, payload: { data } });
    return true;
  } catch (err) {
    return dispatch({ type: CREATE_ORGANIZATION_FAILURE });
  }
};
