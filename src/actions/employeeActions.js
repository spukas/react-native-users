import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ props, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { props, value },
});
