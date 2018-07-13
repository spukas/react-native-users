import { EMPLOYEE_UPDATE } from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.props]: action.payload.value };
    default:
      return state;
  }
};
