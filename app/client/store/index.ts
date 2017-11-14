import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from '../reducers/root';
import rootSaga from '../sagas/index';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
