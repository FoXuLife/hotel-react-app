import { } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects'
import { INIT_REQUIRE, INIT_SUCCESS } from '../reducers/appReducer';
import { authWorker } from './authSaga';

export function* initializeWorker() {
    yield call(authWorker);
    yield put({ type: INIT_SUCCESS })
}
export function* initializeWatcher() {
    yield takeEvery(INIT_REQUIRE, initializeWorker)
}