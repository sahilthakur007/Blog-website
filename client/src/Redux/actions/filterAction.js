export const filterBySearch = (searchValue) => (dispatch) => {
    try {
        dispatch({
            type: "SEARCH_VALUE",
            payload:searchValue
        })
    }
    catch (error)
    {
        console.log(error);
    }
}
