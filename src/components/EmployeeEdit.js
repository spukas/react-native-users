import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import {
  employeeUpdate, employeeSave, employeeClearForm, employeeRemove,
} from '../actions';
import {
  Card, CardSection, Button, ConfirmModal,
} from './common';
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
    employeeRemove: PropTypes.func.isRequired,
  }

  state = {
    showModal: false,
  }

  componentWillMount = () => {
    const { employee, employeeUpdate: employeeUpdateAction } = this.props;

    Object.keys(employee).forEach(props => employeeUpdateAction({ props, value: employee[props] }));
  }

  componentWillUnmount = () => {
    const { employeeClearForm: employeeClearFormAction } = this.props;

    employeeClearFormAction();
    this.closeModal();
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

    Communications.text(phone, `Your schedule is on ${shift}`);
  }

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false });

  handleFirePress = () => this.openModal();

  handleModalConfirm = () => {
    const { employee, employeeRemove: employeeRemoveAction } = this.props;

    employeeRemoveAction({ uid: employee.id });
    this.closeModal();
  };

  handleModalCancel = () => this.closeModal();

  render() {
    const { showModal } = this.state;

    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleSavePress}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleTextPress}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleFirePress}>
            Fire employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={showModal}
          onConfirm={this.handleModalConfirm}
          onCancel={this.handleModalCancel}
        >
          Fire employee?
        </ConfirmModal>
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
    employeeRemove,
  })(EmployeeEdit);
