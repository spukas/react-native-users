import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Text, StyleSheet, View, Picker,
} from 'react-native';
import { CardSection, Input } from './common';
import { employeeCreate, employeeUpdate } from '../actions';
import { weekdays } from './weekdays';

const styles = StyleSheet.create({
  pickerContainer: { flexDirection: 'column' },
  pickerLabel: { fontSize: 18, paddingLeft: 20 },
});

class EmployeeForm extends Component {
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

     handleButtonPress = () => {
       const { name, phone, shift } = this.props;

       employeeCreate({ name, phone, shift: shift || 'Monday' });
     }

     render() {
       const { name, phone, shift } = this.props;

       return (
         <View>
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
                 .map(({ label, value }) => (
                   <Picker.Item
                     key={label}
                     label={label}
                     value={value}
                   />
                 ))}
             </Picker>
           </CardSection>
         </View>
       );
     }
}


const mapStateToProps = state => ({
  name: state.form.name,
  phone: state.form.phone,
  shift: state.form.shift,
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
