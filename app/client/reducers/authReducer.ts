import { loadUser, login, logout, setUnauthorized } from '../actions/index';
import { AuthorizationStatus, User } from '../models/auth';

export interface AuthState {
  status: AuthorizationStatus;
  error?: string;
  user?: User;
}

const initialState = {
  status: AuthorizationStatus.PreLogin,
  error: null as string
};

export function auth(state: any = initialState, action: any) {
  switch (action.type) {
    case login.request:
      return {
        error: null,
        user: null,
        status: AuthorizationStatus.Pending
      };
    case login.failureType:
    case setUnauthorized.type:
    case loadUser.failureType:
    case logout.type:
      return {
        ...state,
        status: AuthorizationStatus.NotAuthorized,
        user: null
      };
    case login.successType:
    case loadUser.successType:
      if (action.payload.success) {
        return {
          ...state,
          status: AuthorizationStatus.Authorized,
          user: action.payload.user
        };
      } else {
        return {
          ...state,
          error: action.payload.message,
          status: AuthorizationStatus.NotAuthorized
        };
      }
  }
  return state;
};