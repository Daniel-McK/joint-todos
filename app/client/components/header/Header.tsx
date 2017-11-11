import * as React from 'react';
import { AppBar, Toolbar } from 'material-ui';

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <AppBar title="Title" />
    );
  }
}

export default Header;