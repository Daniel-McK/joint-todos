import * as React from 'react';
import { connect } from 'react-redux';

import { fakeLogin } from '../../actions/index';
import { AuthorizationStatus } from '../../models/auth';

interface HomeProps {
  login: VoidFunction;
  status: AuthorizationStatus;
}

class Home extends React.Component<HomeProps, any> {

  public componentDidMount() {
    this.props.login();
  }

  public render() {
    return (
      <div>
        <p>Home</p>
        <p>{this.props.status}</p>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { status } = state.auth;
  return {
    status
  };
}

function mapDispatchToProps(dispatch: (action: any) => void) {
  return {
    login: () => dispatch(fakeLogin.create())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);