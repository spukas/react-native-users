import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Button, Input, Spinner,
} from './common';
import * as actions from '../actions';

const styles = StyleSheet.create({
  errorView: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 20,
  },
});


class LoginForm extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    emailChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  handleEmailChange = (text) => {
    const { emailChange } = this.props;
    emailChange(text);
  };

  handlePasswordChange = (text) => {
    const { passwordChange } = this.props;
    passwordChange(text);
  };

  handleButtonPress = () => {
    const { loginUser, email, password } = this.props;
    loginUser({ email, password });
  }

  renderError = () => {
    const { error } = this.props;

    if (error) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      );
    }

    return null;
  }

  renderButton = () => {
    const { loading } = this.props;

    if (loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.handleButtonPress}>Login</Button>;
  }

  render() {
    const { email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="your@email.com"
            text={email}
            onTextChange={this.handleEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            label="password"
            placeholder="password"
            text={password}
            onTextChange={this.handlePasswordChange}
            secure
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, actions)(LoginForm);
