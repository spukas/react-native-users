import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import appConfig from './src/config';

const store = createStore(reducers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  componentDidMount = () => {
    const config = {
      ...appConfig.firebase,
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Welcome to React Native!</Text>
        </View>
      </Provider>
    );
  }
}
