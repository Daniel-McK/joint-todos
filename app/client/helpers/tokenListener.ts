import axios from 'axios';
const localStorage = require('local-storage');

import { loadUser } from '../actions/index';
import store from '../store/index';

export default class TokenListener {

  private static instance: TokenListener;

  private constructor(token: string) {
    this.updateAxios(token, true);
    localStorage.on('token', this.updateAxios);
  }

  private updateAxios(token: string, skipDispatch: boolean) {
    if (!skipDispatch) {
      store.dispatch(loadUser.request({token}));
    }
    axios.defaults.headers.token = token;
  }

  public static token(token: string) {
    if (!this.instance) {
      this.instance = new TokenListener(token);
    } else {
      this.instance.updateAxios(token, true);
    }
  }
}