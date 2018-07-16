import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};