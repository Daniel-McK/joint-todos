import * as React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import List from '../../models/list';
import State from '../../models/state';

import './styles/ListCard.scss';

interface ListCardProps {
  list: List;
}

interface ListCardState {
}

class Login extends React.Component<ListCardProps, ListCardState> {

  public render() {
    const { list } = this.props;
    return (
      <Card className="list-card">
        <CardHeader
          title={list.name}
          subtitle={list.contributors.join(', ')}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Some text
        </CardText>
      </Card>
    );
  }

}

export default Login;