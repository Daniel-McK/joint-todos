import * as React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { login } from '../../actions/index';
import State from '../../models/state';
import './styles/Login.scss';

interface LoginProps {
  error: string;
  login: (email: string, password: string) => void;
}

interface LoginState {
  email: string;
  password: string;
}

class Login extends React.Component<LoginProps, any> {

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  public render() {
    const { error } = this.props;
    return (
      <div className="login-page">
        {error &&
          <Paper className="login-error-paper">
            {error}
          </Paper>
        }
        <Paper className="login-paper">
          <TextField hintText="Email" name="todoEmail" onChange={this.updateEmail} />
          <TextField hintText="Password" type="password" name="todoPassword" onChange={this.updatePassword} />
          <RaisedButton label="Login" primary={true} onClick={this.onLoginClick} />
        </Paper>
      </div>
    );
  }

  private onLoginClick = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  private updateEmail = (e: React.FormEvent<any>, email: string) => {
    this.setState({ email });
  }

  private updatePassword = (e: React.FormEvent<any>, password: string) => {
    this.setState({ password });
  }
}

function mapStateToProps(state: State) {
  const { error } = state.auth
  return { error };
}

function mapDispatchToProps(dispatch: (action: any) => void) {
  return {
    login: (email: string, password: string) => dispatch(login.request({ email, password }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);