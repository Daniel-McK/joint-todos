import * as React from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../../actions/index';
import { AuthorizationStatus, User } from '../../models/auth';
import Action from '../../models/action';
import List from '../../models/list';
import State from '../../models/state';

interface HomeProps {
  lists: List[];
  getLists: VoidFunction;
  user: User;
}

class Home extends React.Component<HomeProps, any> {
  
  public componentDidMount() {
    this.props.getLists();
  }

  public render() {
    const { lists, user } = this.props;
    return (
      <div>
        <p>Home: Welcome, {user.firstName}</p>
        {lists.map((list: List) => <p key={list.id}>{list.name}</p>)}
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  const { lists } = state.list;
  const { user } = state.auth;
  return {
    lists,
    user
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getLists: () => dispatch(fetchLists.request())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);