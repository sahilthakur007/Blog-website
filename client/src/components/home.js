import { Fab, Stack, Typography, Box, Tooltip } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import BlogCards from "./BlogCards";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeallblogs } from "../Redux/actions/blogsactoion";
import SlideShow from "./SlideShow";

const filters = [
  "All",
  "trending",
  "technical",
  "environmental",
  "music",
  "history",
  "cooking",
  "tourism",
  "health",
];

const properties = {
  duration: 5000,
  autoplay: true,
  transitionDuration: 1000,
  arrows: true,
  infinite: true,
  easing: "ease",
};
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filterReducer);
  
  // const [blogList, setBlogList] = useState([]);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);

  const [blogList, setBlogList] = useState(blogs);
  useEffect(() => {
    if (searchValue !== "") {
      console.log(searchValue);
      setBlogList((prev) => prev.filter((blog) => (
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
      )))
    }
  },[searchValue])
   
  
  useEffect(() => {
    const getBlogs = async () => {
      dispatch(storeallblogs());
    };
    getBlogs();
  }, []);

  // useEffect(() => {
  //   setBlogList(blogs);
  // }, [blogs]);
  const filterHandler = (e) => {
    if (e.target.id === "All") {
      setBlogList(blogs);
    } else {
      const newBlogList = blogs.filter((blog) => {
        return blog.topic === e.target.id;
      });
      setBlogList(newBlogList);
    }
  };

  return (
    <Box>
      <div
        style={{
          background:
            "url(https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100vw",
          backgroundSize: "100vw 70vh",
          marginTop: "70px",
          // opacity: "70%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "8vh",
        }}
      >
        <h1 style={{ fontStyle: "italic", fontWeight: "bolder" }}>
          Welcome to Easy Blog!
        </h1>
      </div>
      <Typography
        variant="h5"
        color="myColor"
        fontWeight={500}
        sx={{ mt: "4vh", ml: "5vw" }}
      >
        <strong>
          <em>Visit trending blogs...</em>
        </strong>
      </Typography>
      <SlideShow />
      {/* <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each.url} alt="sample" style={{height:"25vw"}}/>
              </div>
            ))}
          </Slide> */}
      {/* <Stack direction="row" spacing={2} sx={{m:"20px"}}>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>All</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Trending</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Technical</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Environmental</Fab>
        </Stack> */}


      {/* <Stack direction="row" spacing={2} sx={{ m: "20px" }}> */}
      <div style={{display:"flex",margin:"20px",overflow:"auto",whiteSpace:"nowrap"}}>
        {filters.map((filter, index) => (
          <button
            id={filter}
            key={index}
            style={{
              height: "40px",
              boxShadow: "2px 2px 6px grey",
              margin:"0px 0.5vw",
              backgroundColor:"rgba(190, 190, 190,0.6)",
              color:"black",
              fontSize:"18px",
              fontWeight:"bold",
              borderRadius:"20px",
              padding:"0px 15px"
            }}
            onClick={(e) => filterHandler(e)}
          >
            {filter.substring(0, 1).toUpperCase() + filter.substring(1)}
          </button>
        ))}
        </div>
      {/* </Stack> */}


      {/* <Stack direction="row" spacing={2} sx={{m:"10px"}}>
            <Chip label="All" sx={{boxShadow:"0px 1px 6px grey"}}>All</Chip>
            <Chip variant="outlined" label="Technical" sx={{boxShadow:"0px 0.5px 6px grey"}}>Trending</Chip>
            <Chip label="Trending" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Technical</Chip>
        </Stack> */}
      <BlogCards blogs={blogList} />
      <ThemeProvider theme={customTheme}>
        <Tooltip
          title="Write blog"
          sx={{ position: "fixed", bottom: 20, right: 20, backgroundImage: "linear-gradient(to left, red, #ff9100)"}}
        >
          <Fab
            variant="extended"
            color="myColor"
            aria-label="add"
            onClick={() => {
              navigate("/createBlog");
            }}
          >
            <EditIcon sx={{ mr: 1 }} />
            New Blog
          </Fab>
        </Tooltip>
      </ThemeProvider>
    </Box>
  );
};
export default Home;
