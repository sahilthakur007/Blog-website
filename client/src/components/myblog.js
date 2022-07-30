import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import BlogCard from "./BlogCard"
let mybloglist =[];
export default () => {
    // const id = useParams.id;
    const { userInfo } = useSelector((state) => state.authReducer);
    const { blogs } = useSelector((state) => state.blogsReducer.blogs);
    
    const navigate = useNavigate();
    useEffect(() => {
        if(userInfo)
        {
            mybloglist = blogs.filter((blog) => blog.userId == userInfo.user._id) 
        }
        else {
            navigate("/signup")
        }
        
    }, [ userInfo])
   
   
    return (
        <>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",marginTop:"80px" }}>
                {
                    mybloglist && (mybloglist.map((blog) => (
                        <BlogCard blog={blog} />
                    )))
                }
            </div>
           
        </>
    )
}