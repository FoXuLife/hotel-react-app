
import { } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects'
import { AuthAPI, LoginingAPI, LogoutAPI } from '../../api';
import { loginSucces, LOGIN_REQUEST, AUTH, LOGOUT_REQUEST, logoutSucces } from "../reducers/authReducer";


export function* authWorker() {
    const user = yield call(AuthAPI)
    yield put(loginSucces(user.email, user.uid, user.accessToken, true))
}
function* loginRequestWorker({ login, password, navigate }) {
    const data = yield LoginingAPI(login, password)
    yield put(loginSucces(data.user.email, data.user.uid, data.user.accessToken, true))
    yield navigate('/')
}

function* logoutRequestWorker() {
    yield call(LogoutAPI)
    yield put(logoutSucces())
}

export function* loginRequestWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginRequestWorker)
}

export function* logoutRequestWatcher() {
    yield takeEvery(LOGOUT_REQUEST, logoutRequestWorker)
}
export function* authWatcher() {
    yield takeEvery(AUTH, authWorker)
}