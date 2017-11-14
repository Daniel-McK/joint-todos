import * as React from 'react';
import { connect } from 'react-redux';
const localStorage = require('local-storage');
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import UserIcon from 'material-ui/svg-icons/social/person';
import { white } from 'material-ui/styles/colors';

import { logout } from '../../actions/index';
import { AuthorizationStatus } from '../../models/auth';
import Action from '../../models/action';
import State from '../../models/state';
import { LOGGED_OUT_TOKEN } from '../../helpers/token';

interface HomeProps {
  status: AuthorizationStatus;
  logoutUser: VoidFunction;
}

class Home extends React.Component<HomeProps, any> {

  public render() {
    if (this.props.status !== AuthorizationStatus.Authorized) {
      return null;
    }

    return (
      <IconMenu
        iconButtonElement={
          <IconButton><UserIcon color={white} /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" onClick={this.onLogoutClick} />
      </IconMenu>
    );
  }

  private onLogoutClick = () => {
    localStorage.set('token', LOGGED_OUT_TOKEN);
    this.props.logoutUser();
  }
}

function mapStateToProps(state: State) {
  const { status } = state.auth;
  return {
    status
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    logoutUser: () => dispatch(logout.create())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);