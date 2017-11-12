import { fakeLogin } from '../actions/index';
import { AuthorizationStatus } from '../models/auth';

const initialState = {
  status: AuthorizationStatus.PreLogin
};

export default function authReducer(state: any = initialState, action: any) {
  switch(action.type) {
    case fakeLogin.type:
      return {
        ...state,
        status: AuthorizationStatus.Authorized
      };
  }
  return state;
};