import { takeEvery, put, call } from 'redux-saga/effects'
import { getHotelsAPI } from '../../api'
import { getHotelFailed, GET_HOTELS, loadProgressing, setHotel } from '../reducers/hotelReducer'
import { setFilterParams } from '../reducers/filterReducer';



export function* getHotelWorker({ location, date, countDays }) {
    yield put(loadProgressing(false))
    const hotels = yield call(getHotelsAPI, location, date, countDays)
    if (hotels.data) {
        yield put(setFilterParams(location, date, countDays))
        yield put(setHotel(hotels.data))
        yield put(loadProgressing(true))
    }
    else if (hotels === 'location: Location not found') {
        yield put(getHotelFailed('Указанная вами локация не найдена'))
        yield put(loadProgressing(true))
    }
}


export function* getHotelWatcher() {
    yield takeEvery(GET_HOTELS, getHotelWorker)
}