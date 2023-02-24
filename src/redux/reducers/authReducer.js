
export const LOGIN = 'auth/LOGIN';
export const LOGIN_REQUEST = 'auth/LOGIN-REQUEST';
export const AUTH = 'auth/AUTH'
export const LOGOUT_REQUEST = 'auth/LOGOUT-REQUEST'
export const LOGIN_FAILED = 'auth/LOGIN-FILED'
const LOGOUT = 'auth/LOGOUT';


const init = {
    login: null,
    id: null,
    token: null,
    isAuth: false,
    errors: null
}

export const authReducer = (state = init, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, login: action.login, id: action.id, token: action.token, isAuth: action.isAuth, errors: null }
        case LOGOUT:
            return { ...state, login: null, id: null, token: null, isAuth: false, errors: null }
        case LOGIN_FAILED:
            return { ...state, errors: action.errors }
        default:
            return state
    }
}
export const authorization = () => {
    return { type: AUTH }
}
export const loginSucces = (login, id, token, isAuth) => {
    return { type: LOGIN, login: login, id: id, token: token, isAuth: isAuth }
}
export const loginFailed = (payload) => {
    return { type: LOGIN_FAILED, errors: payload }
}
export const loginRequest = (login, password, navigate) => {
    return { type: LOGIN_REQUEST, login: login, password: password, navigate: navigate }
}
export const logoutSucces = () => {
    return { type: LOGOUT }
}
export const logoutRequest = () => {
    return { type: LOGOUT_REQUEST }
}