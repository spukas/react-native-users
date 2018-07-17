import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback, View, Text, StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
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
      }).isRequired,
    }

    handleNamePress = () => {
      const { item } = this.props;

      Actions.employeeEdit({ employee: item });
    }

    render() {
      const { item: { name } } = this.props;

      return (
        <TouchableWithoutFeedback onPress={this.handleNamePress}>
          <View>
            <CardSection>
              <Text style={styles.name}>{name}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
      );
    }
}
