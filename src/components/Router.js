import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './LoginForm';

export const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginForm} title="Login please" />
    </Scene>
  </Router>
);
