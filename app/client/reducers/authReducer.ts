import { fakeLogin, login } from '../actions/index';
import { AuthorizationStatus } from '../models/auth';

const initialState = {
  status: AuthorizationStatus.PreLogin
};

export function auth(state: any = initialState, action: any) {
  switch(action.type) {
    case fakeLogin.type:
    case login.successType:
      return {
        ...state,
        status: AuthorizationStatus.Authorized
      };
  }
  return state;
};