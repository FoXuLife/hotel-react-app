import { spawn } from "redux-saga/effects";
import { initializeWatcher } from "./appSaga";
import { loginRequestWatcher, authWatcher, logoutRequestWatcher } from "./authSaga";
import { getFilterWatcher } from "./filterSaga";
import { getHotelWatcher } from "./hotelSaga";

export default function* rootSaga() {
    yield spawn(initializeWatcher)
    yield spawn(loginRequestWatcher)
    yield spawn(authWatcher)
    yield spawn(logoutRequestWatcher)
    yield spawn(getHotelWatcher)
    yield spawn(getFilterWatcher)
}