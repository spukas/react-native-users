import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore((() => {}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
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
