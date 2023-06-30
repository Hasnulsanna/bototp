import signupReducers from "./signup";
import currentUserReducer from "./currentUser";
import {combineReducers} from 'redux'


export default combineReducers({
    signupReducers,currentUserReducer
})