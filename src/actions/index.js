import firebase from 'firebase';

import {
  EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
} from './types';

export const emailChange = text => ({
  type: EMAIL_CHANGE,
  payload: text,
});

export const passwordChange = text => ({
  type: PASSWORD_CHANGE,
  payload: text,
});

const loginUserSucces = (dispatch, user) => dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

// reduxThunk lets return a function with the dispatch access
export const loginUser = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });

  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return loginUserSucces(dispatch, user);
  } catch (err) {
    // create user if auth failed
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSucces(dispatch, user))
      // if auth and create user fails, dispatch action with fail type
      .catch(loginUserFail(dispatch));
  }
};
