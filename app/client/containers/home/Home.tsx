import * as React from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../../actions/index';
import { AuthorizationStatus } from '../../models/auth';
import Action from '../../models/action';
import List from '../../models/list';
import State from '../../models/state';

interface HomeProps {
  lists: List[];
  getLists: VoidFunction;
}

class Home extends React.Component<HomeProps, any> {
  
  public componentDidMount() {
    this.props.getLists();
  }

  public render() {
    return (
      <div>
        <p>Home</p>
        {this.props.lists.map((list) => <p key={list.id}>{list.name}</p>)}
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  const { lists } = state.list;
  return {
    lists
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getLists: () => dispatch(fetchLists.request())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);