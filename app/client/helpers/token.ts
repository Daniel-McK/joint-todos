import axios from 'axios';
const localStorage = require('local-storage');

import { loadUser, logout } from '../actions/index';
import store from '../store/index';

export const LOGGED_OUT_TOKEN = 'LOGGED_OUT';

export class TokenListener {

  private static instance: TokenListener;

  private constructor(token: string) {
    this.updateAxios(token);
    localStorage.on('token', this.updateAndDispatch);
  }

  private updateAndDispatch = (token: string) => {
    if (isValidToken(token)) {
      store.dispatch(loadUser.request({token}));
    } else {
      store.dispatch(logout.create());
    }
    this.updateAxios(token);
  }

  private updateAxios(token: string) {
    axios.defaults.headers.token = token;
  }

  public static token(token: string) {
    if (!this.instance) {
      this.instance = new TokenListener(token);
    } else {
      this.instance.updateAxios(token);
    }
  }
}

export function isValidToken(token: string) {
  return token && token !== LOGGED_OUT_TOKEN;
}