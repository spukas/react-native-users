import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

export const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login please" initial />
      </Scene>

      <Scene key="main">
        <Scene
          key="employees"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create employee" />
      </Scene>
    </Scene>
  </Router>
);
