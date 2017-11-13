import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { list } from './listsReducer';

export const rootReducer = combineReducers({
  auth,
  list
});