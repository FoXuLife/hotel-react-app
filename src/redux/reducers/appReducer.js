export const INIT_REQUIRE = 'app/INIT_REQUIRE';
export const INIT_SUCCESS = 'app/INIT-SUCCESS';
let init = {
    initialize: false
}
export const appReducer = (state = init, action) => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }
}
export const initializeSuccess = () => {
    return ({ type: INIT_SUCCESS })
}
export const initializeRequre = () => { 
    return ({ type: INIT_REQUIRE })
}
