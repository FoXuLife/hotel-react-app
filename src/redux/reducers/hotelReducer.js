import img1 from 'assets/img/image_part_001.jpg'
import img2 from 'assets/img/image_part_002.jpg'
import img3 from 'assets/img/image_part_003.jpg'
import img4 from 'assets/img/image_part_004.jpg'
import img5 from 'assets/img/image_part_005.jpg'
import img6 from 'assets/img/image_part_006.jpg'
import img7 from 'assets/img/image_part_007.jpg'
import img8 from 'assets/img/image_part_008.jpg'

import { sortHotelHelper } from "helpers/sortHotelsHelper";
export const GET_HOTELS = 'hotel/GET-HOTELS';
const SET_HOTELS = 'hotel/SET-HOTELS';
const FOLLOW_HOTELS = 'hotel/FOLLOW-HOTELS';
const GET_HOTELS_FAILED = 'hotel/GET_HOTELS-FAILED';
const SORT_HOTELS = 'hotel/SORT-HOTELS'
const CLEAR_FOLLOW_HOTELS = 'hotel/CLEAR-FOLLOW-HOTELS'

const init = {
    images: [
        {
            id: 1,
            src: img1
        },
        {
            id: 2,
            src: img2
        },
        {
            id: 3,
            src: img3
        },
        {
            id: 4,
            src: img4
        },
        {
            id: 5,
            src: img5
        },
        {
            id: 6,
            src: img6
        },
        {
            id: 7,
            src: img7
        },
        {
            id: 8,
            src: img8
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
            ...state, hotelsFavorite: action.viewSort === 'priceFilter' ? sortHotelHelper(state.hotelsFavorite, 'priceFrom', action.number) : sortHotelHelper(state.hotelsFavorite, 'stars', action.number)
        }
        case GET_HOTELS_FAILED:
            return { ...state, errors: action.errors }
        case CLEAR_FOLLOW_HOTELS:
            return { ...state, hotelsFavorite: [] }

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
export const sortHotel = (viewSort, number) => {
    console.log(viewSort, number);
    return { type: SORT_HOTELS, viewSort, number }
}
export const setHotel = (hotels) => { // Для записи в int
    return { type: SET_HOTELS, hotels: hotels }
}
export const followHotel = (hotelId, name, stars, priceFrom, date, countDays) => {
    return { type: FOLLOW_HOTELS, hotelId, name, stars, priceFrom, date, countDays }
}
export const clearFollowHotels = () => {
    return { type: CLEAR_FOLLOW_HOTELS }
}


