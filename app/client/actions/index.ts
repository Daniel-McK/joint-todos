import ActionCreator from '../models/actionCreator';
import AsyncActionCreator from '../models/asyncActionCreator';

export const fakeLogin = new ActionCreator('FAKE_LOGIN');

export const fetchLists = new AsyncActionCreator('FETCH_LISTS');
export const login = new AsyncActionCreator('LOGIN');