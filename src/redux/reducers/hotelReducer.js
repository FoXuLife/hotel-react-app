import { sortHotelHelper } from "helpers/sortHotelsHelper";

export const GET_HOTELS = 'hotel/GET-HOTELS';
const SET_HOTELS = 'hotel/SET-HOTELS';
const FOLLOW_HOTELS = 'hotel/FOLLOW-HOTELS';
const GET_HOTELS_FAILED = 'hotel/GET_HOTELS-FAILED';
const SORT_HOTELS = 'hotel/SORT-HOTELS'

const init = {
    images: [
        {
            id: 1,
            src: '/static/media/image_part_001.288d59e5ab9134dba469.jpg'
        },
        {
            id: 2,
            src: '/static/media/image_part_002.b4cc370d18424df4f7ca.jpg'
        },
        {
            id: 3,
            src: '/static/media/image_part_003.dbf281736c843c19d7c5.jpg'
        },
        {
            id: 4,
            src: '/static/media/image_part_004.d9eb3458ac24b38bbb39.jpg'
        },
        {
            id: 5,
            src: '/static/media/image_part_005.5a45ffaa8df866b68ad0.jpg'
        },
        {
            id: 6,
            src: '/static/media/image_part_005.5a45ffaa8df866b68ad0.jpg'
        },
        {
            id: 7,
            src: '/static/media/image_part_007.143fbe0640532d07ec62.jpg'
        },
        {
            id: 8,
            src: '/static/media/image_part_008.925b395d1e996d338500.jpg'
        }

    ],
    hotels: [

    ],
    hotelsFavorite: [

    ],
    errors: null
}

export const hotelReducer = (state = init, action) => {
    switch (action.type) {
        case SET_HOTELS:
            return {
                ...state, hotels: action.hotels.map((e) => {
                    return {
                        hotelId: e.hotelId,
                        name: e.hotelName,
                        stars: e.stars,
                        priceFrom: e.priceFrom,
                        isFavorite: state.hotelsFavorite.some(element => element.hotelId === e.hotelId) //проверка пришедших из API отелей
                    }

                }), errors: null
            }

        case FOLLOW_HOTELS:
            return {
                ...state, hotelsFavorite: state.hotelsFavorite.some(e => e.hotelId === action.hotelId) ? // Проверка есть ли пришедший id в базе избранных,
                    state.hotelsFavorite.filter((e) => e.hotelId !== action.hotelId)  //если есть то добавляем без него,
                    : [...state.hotelsFavorite,
                    {
                        hotelId: action.hotelId, name: action.name, stars: action.stars,
                        priceFrom: action.priceFrom, date: action.date, countDays: action.countDays, isFavorite: true // если нету, то добавить его
                    }]
                , hotels: state.hotels.map((e) => {
                    return e.isFavorite ? (e.hotelId === action.hotelId ? { ...e, isFavorite: false } : { ...e, isFavorite: true })// Проверка избран ли отель из массива отелей, 
                        : e.hotelId === action.hotelId ? { ...e, isFavorite: true } : { ...e, isFavorite: false } //если да, то проверка на пришедший id.
                }), errors: null
            }
        case SORT_HOTELS: return {
            ...state, hotelsFavorite: action.viewSort === 'price' ? sortHotelHelper(state.hotelsFavorite, 'priceFrom') : sortHotelHelper(state.hotelsFavorite, 'stars')
        }
        case GET_HOTELS_FAILED:
            return { ...state, errors: action.errors }
        default:
            return state
    }
}

export const getHotel = (location, date, countDays) => { // Для саги
    return { type: GET_HOTELS, location: location, date: date, countDays: countDays }
}

export const getHotelFailed = (payload) => {
    return { type: GET_HOTELS_FAILED, errors: payload }
}
export const sortHotel = (viewSort) => {
    return { type: SORT_HOTELS, viewSort }
}
export const setHotel = (hotels) => { // Для записи в int
    return { type: SET_HOTELS, hotels: hotels }
}
export const followHotel = (hotelId, name, stars, priceFrom, date, countDays) => {
    return { type: FOLLOW_HOTELS, hotelId, name, stars, priceFrom, date, countDays }
}

