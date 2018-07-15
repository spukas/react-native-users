import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ListView } from 'react-native';
import * as actions from '../actions';

class EmployeeList extends Component {
  static propTypes = {
    employeesFetch: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    const { employeesFetch } = this.props;
    employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.createDataSource(nextProps);
  }

  createDataSource = (props) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(props.employees);
  }

  render() {
    console.log('EmployeeList > props ', this.props);
    return (
      <View>
        <Text> Eployee of the month </Text>
        <Text> Eployee of the month </Text>
        <Text> Eployee of the month </Text>
        <Text> Eployee of the month </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  const { employees: data } = state;

  const employees = Object.keys(data)
    .map(key => ({
      id: key,
      name: data[key].name,
      phone: data[key].phone,
      shift: data[key].shift,

    }));
  console.log('employees: ', employees);

  return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
