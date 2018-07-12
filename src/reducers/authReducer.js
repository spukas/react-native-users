import {
  EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
} from '../actions/types';

const initialState = {
  email: '', password: '', user: null, error: '', loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state, error: 'Authentication failed', password: '', loading: false,
      };
    default:
      return state;
  }
};
