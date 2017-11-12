import * as React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'material-ui/RaisedButton';

import Header from '../../components/header/Header';
import Add from '../../components/add/Add';
import Home from '../home/Home';
import Login from '../login/Login';
import NotFound from '../../components/not-found/NotFound';
import {  AuthorizationStatus } from '../../models/auth';

import './styles/App.scss';

interface AppProps {
  status: AuthorizationStatus;
}

class App extends React.Component<AppProps, {}> {
  public render() {
    const { status } = this.props;

    if (status !== AuthorizationStatus.Authorized) {
      return <Login />;
    }

    return (
      <div>
        <Header />
        <Link to="/">Home</Link>&nbsp;
        <Link to="/add">Add</Link>&nbsp;
        <Link to="/does-not-match">Random</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route component={NotFound} />
        </Switch>
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

export default withRouter(connect(mapStateToProps)(App));