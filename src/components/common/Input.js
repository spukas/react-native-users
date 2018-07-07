import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput, View, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center',
  },
  input: {
    height: 20,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
});

export const Input = ({
  label, text, placeholder, secure, onTextChange,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      secureTextEntry={secure}
      placeholder={placeholder}
      autoCorrect={false}
      value={text}
      style={styles.input}
      onChangeText={onTextChange}
    />
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secure: PropTypes.bool,
  onTextChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  secure: false,
};
