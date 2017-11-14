import * as React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'material-ui/RaisedButton';
const localStorage = require('local-storage');

import { loadUser, setUnauthorized } from '../../actions/index';
import Header from '../../components/header/Header';
import Add from '../../components/add/Add';
import Home from '../home/Home';
import Login from '../login/Login';
import NotFound from '../../components/not-found/NotFound';
import {  AuthorizationStatus } from '../../models/auth';
import Action from '../../models/action';
import { isValidToken, TokenListener } from '../../helpers/token';

import './styles/App.scss';

interface AppProps {
  status: AuthorizationStatus;
  loadUserFromToken: (token: string) => void;
  unauthorize: VoidFunction;
}

class App extends React.Component<AppProps, {}> {

  constructor(props: AppProps) {
    super(props);
    const token = localStorage.get('token');
    TokenListener.token(token);
    if (isValidToken(token)) {
      this.props.loadUserFromToken(token);
    } else {
      this.props.unauthorize()
    }
  }

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

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    loadUserFromToken: (token: string) => dispatch(loadUser.request({ token })),
    unauthorize: () => dispatch(setUnauthorized.create())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));