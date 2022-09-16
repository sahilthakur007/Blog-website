const initialState = {
    blogs: []
}
const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_BLOG":
            return { ...state, blogs: action.payload };
        case "GET_ALL_BLOG":
            return { ...state, blogs: action.payload };
        case "UPDATE":
            return { ...state, blogs: action.payload };
        case "DELETE":

            return { ...state, blogs: action.payload };
        case "ADDLIKE":
            return { ...state, blogs: action.payload };
        case "COMMENT":
            return { ...state, blogs: action.payload };
       
            
        default:
            return state
    }
}
export default blogsReducer