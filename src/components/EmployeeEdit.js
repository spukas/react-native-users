import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeClearForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    employee: PropTypes.shape({}).isRequired,
    employeeUpdate: PropTypes.func.isRequired,
    employeeSave: PropTypes.func.isRequired,
    employeeClearForm: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    const { employee, employeeUpdate: employeeUpdateAction } = this.props;

    Object.keys(employee).forEach(props => employeeUpdateAction({ props, value: employee[props] }));
  }

  componentWillUnmount = () => {
    const { employeeClearForm: employeeClearFormAction } = this.props;

    employeeClearFormAction();
  }


  handleSavePress = () => {
    const {
      name,
      phone,
      shift,
      employee,
      employeeSave: employeeSaveAction,
    } = this.props;

    employeeSaveAction({
      name, phone, shift, uid: employee.id,
    });
  }

  handleTextPress = () => {
    const { phone, shift } = this.props;
    console.log('{ phone, shift }: ', { phone, shift });

    Communications.text(phone, `Your schedule is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleSavePress}>
            Save Changes
          </Button>
          <Button onPress={this.handleTextPress}>
            Text Schedule
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

export default connect(mapStateToProps,
  {
    employeeUpdate,
    employeeSave,
    employeeClearForm,
  })(EmployeeEdit);
