import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Button from 'material-ui/RaisedButton';

import Header from './components/header/Header';
import Add from './components/add/Add';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';

import './styles/App.scss';

class App extends React.Component<{}, {}> {
  public render() {
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

export default App;