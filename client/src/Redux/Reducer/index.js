import { combineReducers } from "redux";
import authReducer from "./authreducer";
import blogsReducer from "./blogreducer";
const reducer = combineReducers({
    authReducer,blogsReducer
})
export default reducer;