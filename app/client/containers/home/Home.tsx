import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ListCard from '../../components/cards/ListCard';
import { fetchLists } from '../../actions/index';
import { AuthorizationStatus, User } from '../../models/auth';
import Action from '../../models/action';
import List from '../../models/list';
import State from '../../models/state';

import './styles/Home.scss';

interface HomeProps {
  lists: List[];
  getLists: VoidFunction;
  user: User;
  history?: any[];
}

class Home extends React.Component<HomeProps, any> {
  
  public componentDidMount() {
    this.props.getLists();
  }

  public render() {
    const { lists } = this.props;
    return (
      <div className="home-wrapper">
        {lists.map((list: List) => <ListCard list={list} key={list.id} />)}
        <FloatingActionButton className="add-list-button" onClick={this.onAddClick}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

  private onAddClick = () => {
    this.props.history.push('/add-list');
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));