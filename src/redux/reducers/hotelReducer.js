import img from 'assets/img/image_part_001.jpg'
import img2 from 'assets/img/image_part_002.jpg'
import img3 from 'assets/img/image_part_003.jpg'
import img4 from 'assets/img/image_part_004.jpg'
import img5 from 'assets/img/image_part_005.jpg'
import img6 from 'assets/img/image_part_006.jpg'
import img7 from 'assets/img/image_part_007.jpg'
import img8 from 'assets/img/image_part_008.jpg'
export const GET_HOTELS = 'hotel/GET-HOTELS';
const SET_HOTELS = 'hotel/SET-HOTELS';
const SET_FAVORITE_HOTELS = 'hotel/SET-FAVORITE-HOTELS';
const FOLLOW_HOTELS = 'hotel/FOLLOW-HOTELS';
const UNFOLLOW_HOTELS = 'hotel/UNFOLLOW-HOTELS';



const init = {
    images: [
        {
            id: 1,
            src: img
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
        {
            hotelId: null,
            name: null,
            starts: null,
            priceFrom: null
        }
    ],
    hotelsFavorite: [
        {
            hotelId: null,
            name: null,
            starts: null,
            priceFrom: null,
            date: null,
            countDays: null
        }
    ]
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
                        priceFrom: e.priceFrom
                    }
                })
            }
        //  
        case FOLLOW_HOTELS:
            return {
                ...state, hotelsFavorite:state.hotelsFavorite.some(e=>e.hotelId === action.hotelId)?state.hotelsFavorite.filter((e) => e.hotelId !== action.hotelId)
                :[...state.hotelsFavorite, { hotelId: action.hotelId, name: action.name, starts: action.starts, priceFrom: action.priceFrom, date: action.date, countDays: action.countDays }]
                 
            }
        default:
            return state
    }
}

export const getHotel = (location, date, countDays) => {
    return { type: GET_HOTELS, location: location, date: date, countDays: countDays }
}
export const setHotel = (hotels) => {
    return { type: SET_HOTELS, hotels: hotels }
}
export const followHotel = (hotelId, name, starts, priceFrom, date, countDays) => {
    return { type: FOLLOW_HOTELS, hotelId, name, starts, priceFrom, date, countDays }
}

export const unfollowHotel = (hotelId) => {
    return { type: UNFOLLOW_HOTELS, hotelId }
}
