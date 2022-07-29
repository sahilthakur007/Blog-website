const initialState = "";

const filterReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case "SEARCH_VALUE":
            return action.payload;
        default:
            return state;
    }
}
export default filterReducer