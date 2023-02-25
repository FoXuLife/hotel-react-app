import { takeEvery, put } from 'redux-saga/effects'
import { GET_FILTER_PARAMS } from 'redux/reducers/filterReducer'
import { getHotel } from 'redux/reducers/hotelReducer'



export function* getFilterWorker({ location, date, countDays }) {
    yield put(getHotel(location, date, countDays))
}


export function* getFilterWatcher() {
    yield takeEvery(GET_FILTER_PARAMS, getFilterWorker)
}