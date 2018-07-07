import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export const CardSection = props => (
  <View style={styles.container}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};
