import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { EmployeeListItem } from './EmployeeListItem';
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
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={row => <EmployeeListItem item={row} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { employees: data } = state;

  const employees = Object.keys(data)
    .map(key => ({
      id: key,
      ...data[key],
    }));

  return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
