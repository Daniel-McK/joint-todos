import * as React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'material-ui/RaisedButton';
const localStorage = require('local-storage');

import { loadUser, setUnauthorized } from '../../actions/index';
import Header from '../../components/header/Header';
import Add from '../../components/add/Add';
import AppLoader from '../../components/app-loader/AppLoader';
import Home from '../home/Home';
import Login from '../login/Login';
import NotFound from '../../components/not-found/NotFound';
import {  AuthorizationStatus } from '../../models/auth';
import Action from '../../models/action';
import { isValidToken, TokenListener } from '../../helpers/token';

import './styles/App.scss';

const MIN_LOAD_TIME = 500;

interface AppProps {
  status: AuthorizationStatus;
  loadUserFromToken: (token: string) => void;
  unauthorize: VoidFunction;
}

interface AppState {
  initialLoad: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      initialLoad: true
    };
    const token = localStorage.get('token');
    TokenListener.token(token);
    if (isValidToken(token)) {
      this.props.loadUserFromToken(token);
    } else {
      this.props.unauthorize()
    }
    setTimeout(this.hideLoader, MIN_LOAD_TIME);
  }

  public render() {
    const { status } = this.props;
    const { initialLoad } = this.state;

    if (initialLoad || status === AuthorizationStatus.PreLogin) {
      return <AppLoader />;
    }
    
    if (status !== AuthorizationStatus.Authorized) {
      return <Login />;
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-list" component={Add} />
          <Route component={NotFound} />
        </Switch>
      </div>    
    );
  }

  private hideLoader = () => {
    this.setState({
      initialLoad: false
    });
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