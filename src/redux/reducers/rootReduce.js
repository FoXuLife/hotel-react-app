import { combineReducers } from "redux";
const init = {
    test: 'test'
}
const reducer = (state = init, action) => {
    return state
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer