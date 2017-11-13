import * as React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { login } from '../../actions/index';

import './styles/Login.scss';

interface LoginProps {
  login: VoidFunction;
}

class Login extends React.Component<LoginProps, any> {

  public render() {
    return (
      <div className="login-page">
        <Paper className="login-paper">
          <TextField hintText="Email" name="todoUsername" />
          <TextField hintText="Password" type="password" name="todoPassword" />
          <RaisedButton label="Login" primary={true} onClick={this.props.login} />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: (action: any) => void) {
  return {
    login: () => dispatch(login.request({email: 'testemail', password: 'testpassword'}))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);