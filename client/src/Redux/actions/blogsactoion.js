import { getalllblogs, storeblog, updateblog, addlike, addcomment, deleteblog } from "../../api/allApi"

export const storeallblogs = () => async(dispatch) => {
    
    try {
        const { data } = await getalllblogs();
        dispatch({
            type: "GET_ALL_BLOG",
            payload:data
        })
    }
    catch (error)
    {
        console.log(error);
    }
}
export const sendBlog = (blog,navigate) => async (dispatch) => {
    try {
        const res = await storeblog(blog);
        const { data } = await getalllblogs();
       
        dispatch({
            type: "SEND_BLOG",
            payload:data
        })
        if (res.status == 200) {
            navigate("/")
        }
    }
    catch (error)
    {
        console.log(error);
    }
}
export const sendComment = (comment, id) => async(dispatch) => {
    
    try{
        const res = await addcomment(comment, id); 
        console.log(res);
        const { data } = await getalllblogs();
        dispatch({
            type: "COMMENT",
            payload:data
        })
    }
    catch(error)
    {
        console.log(error);

    }
}
export const deleteBlog = (id,navigate) => async (dispatch) => {

    try {
        const res = await deleteblog(id);
        console.log(res);
        const { data } = await getalllblogs();
        dispatch({
            type: "DELETE",
            payload: data
        })
        if (res.status == 200)
        {
            navigate("/")
            }
    }
    catch (error) {
        console.log(error);

    }
}

export const updateBlog = (blog, id,navigate) => async(dispatch) => {
    try {
        const res = await updateblog(blog, id);
        const { data } = await getalllblogs();
        dispatch({
            type: "UPDATE",
            payload: data
        })
        if (res.status == 200) {
            navigate("/")
        }
    }
    catch (error) {
        console.log(error); 
    }
}
export const addLike = (id) => async (dispatch) => {
    try {
        const res = await addlike(id);
        const { data } = await getalllblogs();
        dispatch({
            type: "ADDLIKE",
            payload: data
        })
    }
    catch (error) {
        console.log(error);
    }
} 