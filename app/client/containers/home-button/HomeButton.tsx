import * as React from 'react';
import { withRouter,  } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import { white } from 'material-ui/styles/colors';

import { logout } from '../../actions/index';
import { AuthorizationStatus } from '../../models/auth';
import Action from '../../models/action';
import State from '../../models/state';
import { LOGGED_OUT_TOKEN } from '../../helpers/token';

interface HomeButtonProps {
  history?: any[]
}

class HomeButton extends React.Component<HomeButtonProps, any> {

  public render() {
    return (
      <IconButton onClick={this.onHomeClick}><HomeIcon color={white} /></IconButton>
    );
  }

  private onHomeClick = () => {
    this.props.history.push('/');
  }
}

export default withRouter(HomeButton);