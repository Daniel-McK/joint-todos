import ActionCreator from '../models/actionCreator';
import AsyncActionCreator from '../models/asyncActionCreator';

export const fakeLogin = new ActionCreator('FAKE_LOGIN');
export const setUnauthorized = new ActionCreator('SET_UNAUTHORIZED');
export const logout = new ActionCreator('LOGOUT');

export const fetchLists = new AsyncActionCreator('FETCH_LISTS');
export const login = new AsyncActionCreator('LOGIN');
export const loadUser = new AsyncActionCreator('LOAD_USER');