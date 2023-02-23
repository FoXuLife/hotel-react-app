import { takeEvery, put, call } from 'redux-saga/effects'
import { getHotelsAPI } from '../../api'
import { GET_HOTELS, setHotel } from '../reducers/hotelReducer'



export function* getHotelWorker(location, date, countDays) {
    const hotels = yield call(getHotelsAPI, location, date, countDays)
    yield put(setHotel(hotels.data))
}


export function* getHotelWatcher() {
    yield takeEvery(GET_HOTELS, getHotelWorker)
}