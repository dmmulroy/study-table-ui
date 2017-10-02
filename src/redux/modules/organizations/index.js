const axios = require('axios');

// Actions
const REQUEST_USER_ORGANIZATIONS =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS';
const REQUEST_USER_ORGANIZATIONS_SUCCESS =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS_SUCCESS';
const REQUEST_USER_ORGANIZATIONS_FAILURE =
  'study-table/organizations/REQUEST_USER_ORGANIZATIONS_FAILURE';

// Reducer
const initialState = {
  organizations: {},
  isFetching
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_ORGANIZATIONS:
      return { ...state, isFetching: true };
    case REQUEST_USER_ORGANIZATIONS_SUCCESS:
      return { ...state, ...action.payload, isFetching: true };
    case REQUEST_USER_ORGANIZATIONS_FAILURE:
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

    const { organizations } = data;

    dispatch({
      type: REQUEST_USER_ORGANIZATIONS_SUCCESS,
      payload: organization
    });
  } catch (err) {
    dispatch({ type: REQUEST_USER_ORGANIZATIONS_FAILURE });
  }
};
