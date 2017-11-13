import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import * as API from '../api/index';
import { fetchLists } from '../actions/index';
import AsyncActionCreator from '../models/asyncActionCreator';

function* fetch(boundFunction: () => any, actionCreator: AsyncActionCreator){
  try {
    const result = yield call(boundFunction);
    yield put(actionCreator.success(result.data));
  } catch (error) {
    yield put(actionCreator.failure(error));
  }
}

function* handleFetchLists(action: any): any {
  yield fetch(API.fetchLists, fetchLists);
}

export default function *rootSaga() {
  yield [
    takeLatest(fetchLists.requestType, handleFetchLists)
  ];
}