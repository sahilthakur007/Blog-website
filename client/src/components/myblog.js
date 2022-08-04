import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { CircularProgress,Box }  from "@mui/material"
let mybloglist = [];
export default () => {
  // const id = useParams.id;
  const { userInfo } = useSelector((state) => state.authReducer);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);

  const navigate = useNavigate();
    if (userInfo && !blogs) {

    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        // margin: "10px 0px",
        mt: { lg: "25%",xs:"60%" }
      }}><CircularProgress /></Box>
    )

  }
  useEffect(() => {
    if (userInfo&&blogs) {
      mybloglist = blogs.filter((blog) => blog.userId == userInfo.user._id);
    }
   
    
    else {
      navigate("/signup");
    }
  }, [userInfo,blogs]);

  return (
    <>
      <div className="blogcards"
        style={{
          marginTop: "80px",
        }}
      >
        {mybloglist && mybloglist.map((blog) => <BlogCard blog={blog} />)}
      </div>
    </>
  );
};
