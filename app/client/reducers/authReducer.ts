import { loadUser, login, logout, setUnauthorized } from '../actions/index';
import { AuthorizationStatus } from '../models/auth';

export interface AuthState {
  status: AuthorizationStatus;
  error?: string;
}

const initialState = {
  status: AuthorizationStatus.PreLogin,
  error: null as string
};

export function auth(state: any = initialState, action: any) {
  switch (action.type) {
    case login.request:
      return {
        error: null
      };
    case login.failureType:
    case setUnauthorized.type:
    case loadUser.failureType:
    case logout.type:
      return {
        ...state,
        status: AuthorizationStatus.NotAuthorized
      }
    case login.successType:
    case loadUser.successType:
      if (action.payload.success) {
        return {
          ...state,
          status: AuthorizationStatus.Authorized
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