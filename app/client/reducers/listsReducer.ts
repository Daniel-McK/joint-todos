import { fetchLists } from '../actions/index';
import Action from '../models/action';
import List from '../models/list';

export interface ListState {
  lists: List[];
}

const initialState: ListState = {
  lists: []
};

export function list(state: ListState = initialState, action: Action) {
  switch(action.type) {
    case fetchLists.requestType:
      return {
        ...state,
        lists: []
      };
    case fetchLists.successType:
      return {
        ...state,
        lists: action.payload
      };
    case fetchLists.failureType:
    default:
      return state;
  }
};