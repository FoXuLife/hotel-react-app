import img1 from 'assets/img/image_part_001.webp'
import img2 from 'assets/img/image_part_002.webp'
import img3 from 'assets/img/image_part_003.webp'
import img4 from 'assets/img/image_part_004.webp'
import img5 from 'assets/img/image_part_005.webp'
import img6 from 'assets/img/image_part_006.webp'
import img7 from 'assets/img/image_part_007.webp'
import img8 from 'assets/img/image_part_008.webp'

import { sortHotelHelper } from "helpers/sortHotelsHelper";
export const GET_HOTELS = 'hotel/GET-HOTELS';
const SET_HOTELS = 'hotel/SET-HOTELS';
const FOLLOW_HOTELS = 'hotel/FOLLOW-HOTELS';
const GET_HOTELS_FAILED = 'hotel/GET_HOTELS-FAILED';
const SORT_HOTELS = 'hotel/SORT-HOTELS'
const CLEAR_FOLLOW_HOTELS = 'hotel/CLEAR-FOLLOW-HOTELS'
const LOAD_PROGRESS = 'hotel/LOAD_PROGRESS'

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
    errors: null,
    isLoaded: true
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
                        isFavorite: state.hotelsFavorite.some(element => element.hotelId === e.hotelId),//проверка пришедших из API отелей

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
            ...state, hotelsFavorite: action.viewSort === 'priceFilter' ? sortHotelHelper(state.hotelsFavorite, 'priceFrom', action.number) // Переписать в селекторы !
             : sortHotelHelper(state.hotelsFavorite, 'stars', action.number)
        }
        case GET_HOTELS_FAILED:
            return { ...state, errors: action.errors }
        case CLEAR_FOLLOW_HOTELS:
            return { ...state, hotelsFavorite: [] }
        case LOAD_PROGRESS:
            return { ...state, isLoaded: action.isLoaded }

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
export const loadProgressing = (isLoaded) => {
    return { type: LOAD_PROGRESS, isLoaded }
}



