import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const properties = {
  duration: 5000,
  autoplay: true,
  transitionDuration: 1000,
  arrows: true,
  infinite: true,
  easing: "ease",
};

const SlideShow = () => {
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  const [trendingBlogs,setTrendingBlogs]=useState(blogs.slice(0).sort((a, b) => b.Likes.length - a.Likes.length).slice(0,5))
  useEffect(()=>{
    setTrendingBlogs(blogs.slice(0).sort((a, b) => b.Likes.length - a.Likes.length).slice(0,5))
  },[blogs])
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "2vh" }}>
      <Slide {...properties}>
        {trendingBlogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              height: "35vw",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${blog.image})`,
                height: "35vw",
                width: "80vw",
                backgroundSize: "80vw 35vw",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
             
            >
              <p style={{ marginLeft: "1vw" }}>
                <b style={{ fontSize: "25px",color:"white" }}>{blog.title}</b>{" "}
                <u style={{ color: "white",cursor:"pointer" }}  onClick={() => {
                navigate(`/singleblog/${blog._id}`);
              }}> click here</u>
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideShow;
