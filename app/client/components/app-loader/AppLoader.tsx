import * as React from 'react';

import './styles/AppLoader.scss';

const AppLoader: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="app-loader">
      <div className="loader-item" />
      <div className="loader-item" />
      <div className="loader-item" />
      <div className="loader-item" />
    </div>
  );
}

export default AppLoader;