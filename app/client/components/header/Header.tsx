import * as React from 'react';
import { AppBar, Toolbar } from 'material-ui';

import UserMenu from '../../containers/user-menu/UserMenu';

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <AppBar title="Title"
        iconElementRight={<UserMenu />}
        />
    );
  }
}

export default Header;