import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_CLEAR_FORM } from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.props]: action.payload.value };
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEE_CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};
