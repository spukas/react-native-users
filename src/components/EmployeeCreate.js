import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Card,
  CardSection,
  Button,
  Input,
  // Spinner,
} from './common';
import { weekdays } from './weekdays';

const styles = StyleSheet.create({
  pickerContainer: { flexDirection: 'column' },
  pickerLabel: { fontSize: 18, paddingLeft: 20 },
});

class EmployeeCreate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    employeeUpdate: PropTypes.func.isRequired,
    employeeCreate: PropTypes.func.isRequired,
  }

  handleChange = props => (value) => {
    const { employeeUpdate: employeeUpdateAction } = this.props;

    employeeUpdateAction({ props, value });
  }

  handleButtonPress = () => {
    const {
      name, phone, shift, employeeCreate: employeeCreateAction,
    } = this.props;

    employeeCreateAction({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    const { name, phone, shift } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Linas"
            text={name}
            onTextChange={this.handleChange('name')}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="000-000-000"
            text={phone}
            onTextChange={this.handleChange('phone')}
          />
        </CardSection>

        <CardSection style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={this.handleChange('shift')}
          >
            {weekdays
              .map(({ label, value }) => <Picker.Item key={label} label={label} value={value} />)}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.handleButtonPress}>
            Create
          </Button>
        </CardSection>


      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.form.name,
  phone: state.form.phone,
  shift: state.form.shift,
});

export default connect(mapStateToProps, actions)(EmployeeCreate);
