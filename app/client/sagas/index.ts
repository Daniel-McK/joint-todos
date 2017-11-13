import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import * as API from '../api/index';
import { fetchLists, loadUser, login } from '../actions/index';
import AsyncActionCreator from '../models/asyncActionCreator';
import Action from '../models/action';

function* fetch(boundFunction: () => any, actionCreator: AsyncActionCreator){
  try {
    const result = yield call(boundFunction);
    yield put(actionCreator.success(result.data));
  } catch (error) {
    yield put(actionCreator.failure(error));
  }
}

function* handleFetchLists(action: Action) {
  yield fetch(API.fetchLists, fetchLists);
}

function* handleLogin(action: Action) {
  const boundLogin = API.login.bind(null, action.payload.email, action.payload.password);
  yield fetch(boundLogin, login);
}

function* handleLoadUser(action: Action) {
  const boundLoad = API.loadUser.bind(null, action.payload.token);
  yield fetch(boundLoad, loadUser);
}

export default function* rootSaga() {
  yield [
    takeLatest(fetchLists.requestType, handleFetchLists),
    takeLatest(loadUser.requestType, handleLoadUser),
    takeLatest(login.requestType, handleLogin)
  ];
}