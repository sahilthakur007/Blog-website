import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { CircularProgress, Box, accordionSummaryClasses } from "@mui/material"
import { getSingleBlog } from "../api/allApi"
import { useDispatch } from "react-redux"
let mybloglist = [];
let blogIdList = [];
export default () => {
  // const id = useParams.id;


  const { userInfo } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  console.log(userInfo)
  useEffect(() => {
    const retriveBlog = async (id) => {
      console.log(id)
      const blog = await getSingleBlog(id);
      mybloglist.push(blog)
      console.log(blog.data)
    }
    if (!userInfo || !userInfo.user) {
      navigate("/signup");
    }
    else {
      blogIdList = userInfo.user.savedBlog;
      mybloglist = []; 

      blogIdList.map((SingleBlog) => (
        <>{retriveBlog(SingleBlog.blog)}</>
      ))
    }

  }, [userInfo]);
  console.log(mybloglist)

  if (!userInfo.user.savedBlog) {

    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        // margin: "10px 0px",
        mt: { lg: "25%", xs: "60%" }
      }}><CircularProgress /></Box>
    )

  }


  return (
    <>
      <div className="blogcards"
        style={{
          marginTop: "80px",
        }}
      >
      
      </div>
    </>
  );
};
