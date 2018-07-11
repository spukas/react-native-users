import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import { firebaseAPI } from './src/config';
import LoginForm from './src/components/LoginForm';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

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
        <View style={styles.container}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
