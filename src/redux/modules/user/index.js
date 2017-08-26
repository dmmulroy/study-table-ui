const axios = require('axios');

// Actions
const SIGN_UP = 'study-table/user/SIGN_UP';
const SIGN_UP_SUCCESS = 'study-table/user/SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'study-table/user/SIGN_UP_FAILURE';

// Reducer
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, action.user);
    case SIGN_UP_FAILURE:
    case SIGN_UP:
    default:
      return state;
  }
};

// Action Creators
export const signUp = userData => async dispatch => {
  try {
    const { data } = axios({
      method: 'post',
      url: 'localhost:3001/auth/sign-up',
      data: { ...userData }
    });

    const { token } = data;
    dispatch(SIGN_UP_SUCCESS, Object.assign({}, userData, { token }));
  } catch (err) {
    dispatch(SIGN_UP_FAILURE);
  }
};
