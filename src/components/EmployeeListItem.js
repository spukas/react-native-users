import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    paddingLeft: 20,
  },
});


export class EmployeeListItem extends Component {
    static propTypes = {
      item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        shift: PropTypes.string.isRequired,
      }).isRequired,
    }

    render() {
      const { item: { name, phone, shift } } = this.props;

      return (
        <CardSection>
          <Text style={styles.name}>{name}</Text>
        </CardSection>
      );
    }
}
