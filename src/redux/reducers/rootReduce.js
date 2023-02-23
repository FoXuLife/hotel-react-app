import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';
import { hotelReducer } from './hotelReducer';
import { filterReducer } from './filterReducer';
const rootReducer = combineReducers({
    authReducer,
    appReducer,
    hotelReducer,
    filterReducer
});

export default rootReducer