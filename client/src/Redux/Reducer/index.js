import { combineReducers } from "redux";
import authReducer from "./authreducer";
import blogsReducer from "./blogreducer";
import filterReducer from "./searchFilter";
const reducer = combineReducers({
    authReducer, blogsReducer, filterReducer
})
export default reducer;