import { ListState } from '../reducers/listsReducer';
import { AuthState } from '../reducers/authReducer';

export default interface State {
  auth: AuthState;
  list: ListState;
}