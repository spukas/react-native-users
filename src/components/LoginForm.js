import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card, CardSection, Button, Input,
} from './common';
import * as actions from '../actions';

class LoginForm extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    emailChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
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

  render() {
    console.log('LoginForm > props', this.props);

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
        <CardSection>
          <Button onPress={this.handleButtonPress}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(mapStateToProps, actions)(LoginForm);
