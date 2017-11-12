import { AuthorizationStatus } from '../models/auth';

const initialState = {
  status: AuthorizationStatus.PreLogin
};

export default function authReducer(state: any = initialState, action: any) {
  return state;
};