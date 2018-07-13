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

export const CardSection = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};

CardSection.defaultProps = {
  style: {},
};
