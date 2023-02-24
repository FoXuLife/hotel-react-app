export const SET_FILTER_PARAMS = 'filter/SET-FILTER-ELEMENTS';
export const GET_FILTER_PARAMS = 'filter/GET-FILTER-PARAMS';


const init = {
    location: 'Москва',
    date: new Date().toISOString().slice(0, 10),
    countDays: 1
}

export const filterReducer = (state = init, action) => {
    switch (action.type) {
        case SET_FILTER_PARAMS:
            return { ...state, location: action.location, date: action.date, countDays: action.countDays }
        default:
            return state
    }
}

export const setFilterParams = (location, date, countDays) => {
    return { type: SET_FILTER_PARAMS, location: location, date: date, countDays: countDays }
}
export const getFilterParams = (location, date, countDays) => {
    return { type: GET_FILTER_PARAMS, location: location, date: date, countDays: countDays }
}
