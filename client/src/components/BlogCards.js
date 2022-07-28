import BlogCard from "./BlogCard"
// import { useEffect } from "react"
// import { useDispatch ,useSelector} from "react-redux"
// import { storeallblogs } from "../Redux/actions/blogsactoion"

// const filters = [
//     "All",
//     "Trending",
//     "Technical",
//     "Environmental",
//     "Music",
//     "History",
//     "Cooking",
//     "Tourism",
//     "Health",
// ];
const BlogCards = ({blogs}) => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const getBlogs = async () => {
    //         dispatch(storeallblogs())
    //     }
    //     getBlogs();
    // }, [])
    // const {blogs} = useSelector((state) => state.blogsReducer.blogs);
    


    // //-----------------
    

    // //------
    // console.log(blogs);
    return(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            {blogs && (blogs.map((blog) => (
                <BlogCard blog={blog} />
            )))}
        </div>
    )
}
export default BlogCards