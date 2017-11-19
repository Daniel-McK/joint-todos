import * as React from 'react';
import { AppBar, Toolbar } from 'material-ui';

import UserMenu from '../../containers/user-menu/UserMenu';
import HomeButton from '../../containers/home-button/HomeButton';

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <AppBar title="Joint To-do Lists"
      iconElementLeft={<HomeButton />}
      iconElementRight={<UserMenu />}
        />
    );
  }
}

export default Header;