import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import { firebaseAPI } from './src/config';
import { RouterComponent } from './src/components/Router';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component {
  componentDidMount = () => {
    const config = {
      ...firebaseAPI,
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
