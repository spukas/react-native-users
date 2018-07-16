import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    employeeCreate: PropTypes.func.isRequired,
  }

  handleButtonPress = () => {
    const {
      name, phone, shift, employeeCreate: employeeCreateAction,
    } = this.props;

    employeeCreateAction({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
