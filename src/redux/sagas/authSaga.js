
import { } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects'
import { AuthAPI, LoginingAPI, LogoutAPI } from '../../api';
import { loginSucces, LOGIN_REQUEST, AUTH, LOGOUT_REQUEST, logoutSucces, loginFailed } from "../reducers/authReducer";


export function* authWorker() {
    const user = yield call(AuthAPI)
    yield user && put(loginSucces(user.email, user.uid, user.accessToken, true))
}
function* loginRequestWorker({ login, password, navigate }) {
    const data = yield LoginingAPI(login, password)
    console.log(data);
    if (data.user) {
        yield put(loginSucces(data.user.email, data.user.uid, data.user.accessToken, true))
        yield navigate('/')
    } else if (data === 'auth/too-many-requests') {
        yield put(loginFailed('Большое количество запросов. Попробуйте позже.'))
    } else if (data === 'invalid-password' || data === 'auth/user-not-found' || data === 'auth/wrong-password') {
        yield put(loginFailed('Проверьте правильность введенных данных'))
    } else {
        yield put(loginFailed('Неизвестная ошибка, пожалуйста обратитесь в поддержку'))
    }
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