import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employeesFetchReducer from './employeesFetchReducer';

export default combineReducers({
  auth: authReducer,
  form: employeeFormReducer,
  employees: employeesFetchReducer,
});
