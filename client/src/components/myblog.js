import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import BlogCard from "./BlogCard"
let mybloglist =[];
export default () => {
    // const id = useParams.id;
    const { userInfo } = useSelector((state) => state.authReducer);
    const { blogs } = useSelector((state) => state.blogsReducer.blogs);
    
   
    useEffect(() => {
        mybloglist = blogs.filter((blog) => blog.userId == userInfo.user._id ) 
       
    }, [mybloglist])
   
   
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