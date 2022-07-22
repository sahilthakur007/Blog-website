const initialSate = {
    user:null
}
const authReducer = ( state = initialSate , action) => {
    switch (action.type)
    {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
         default:
            return state;
    }
}
export default authReducer