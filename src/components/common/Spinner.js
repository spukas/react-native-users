import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Spinner = ({ size }) => (
  <View style={styles.spinner}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};
