import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Card, CardSection, Button, Input, Spinner,
} from './common';
import { weekdays } from './weekdays';


class EmployeeCreate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    employeeUpdate: PropTypes.func.isRequired,
  }

  handleChange = props => (value) => {
    const { employeeUpdate: employeeUpdateAction } = this.props;

    employeeUpdateAction({ props, value });
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

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={this.handleChange('shift')}
          >
            {weekdays
              .map(({ label, value }) => <Picker.Item key={label} label={label} value={value} />)}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={() => {}}>
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
