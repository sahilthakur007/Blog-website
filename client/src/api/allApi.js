import axios from "axios"
const API = axios.create({ baseURL: "https://easy-blogging.herokuapp.com/" })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const signup = (userinfo) => API.post("/auth/login", userinfo);
export const signin = (userinfo) => API.post("/auth/signin", userinfo);
export const getalllblogs = () => API.get("/blogs/getAllBlogs")
export const storeblog = (blog) => API.post("/blogs/storeBlog", blog)
export const updateblog = (blog, id) => API.patch(`/blogs/updateblog/${id}`, blog)
export const addlike = (id) => API.patch(`/blogs/addlike/${id}`)
export const addcomment = (comment, id) => API.post(`/blogs/addcomment/${id}`, comment)
export const deleteblog = (id) => API.patch(`/blogs/deleteblog/${id}`)
export const removelike = (id, uid) => API.patch(`/blogs/removelike/${id}/${uid}`)
export const bookmark = (id) => API.patch(`/auth/bookmark/${id}`); 
export const getSingleBlog = (id) => API.get(`/blogs/getsingleblog/${id}`); 
