import * as React from 'react';
import { connect } from 'react-redux';

import { fakeLogin } from '../../actions/index';
import { AuthorizationStatus } from '../../models/auth';

interface HomeProps {
  status: AuthorizationStatus;
}

class Home extends React.Component<HomeProps, any> {
  
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

export default connect(mapStateToProps)(Home);