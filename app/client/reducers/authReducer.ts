import { fakeLogin, loadUser, login, setUnauthorized } from '../actions/index';
import { AuthorizationStatus } from '../models/auth';

const initialState = {
  status: AuthorizationStatus.PreLogin
};

export function auth(state: any = initialState, action: any) {
  switch(action.type) {
    case login.failureType:
    case setUnauthorized.type:
    case loadUser.failureType:
      return {
        ...state,
        status: AuthorizationStatus.NotAuthorized
      }
    case fakeLogin.type:
    case login.successType:
    case loadUser.successType:
      return {
        ...state,
        status: AuthorizationStatus.Authorized
      };
  }
  return state;
};