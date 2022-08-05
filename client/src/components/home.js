import { Fab, Typography, Box, Tooltip, CircularProgress } from "@mui/material";
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

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const getBlogs = async () => {
      dispatch(storeallblogs());
    };
    getBlogs();
  }, []);
  const { userInfo } = useSelector((state) => state.authReducer);
  const searchValue = useSelector((state) => state.filterReducer);

  const { blogs } = useSelector((state) => state.blogsReducer.blogs);

  const [blogList, setBlogList] = useState(blogs);
  const [filterbtn, setFilterbtn] = useState("All");
  useEffect(() => {
    if (searchValue !== "") {
      setBlogList(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setBlogList(blogs);
    }
  }, [searchValue]);
  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);
  const filterHandler = (e) => {
    setFilterbtn(e.target.id);
    if (e.target.id === "All") {
      setBlogList(blogs);
    } else if (e.target.id === "trending") {
      const trendingblogs = blogs
        .slice(0)
        .sort((a, b) => b.Likes.length - a.Likes.length);
      setBlogList(trendingblogs);
    } else {
      const newBlogList = blogs.filter((blog) => {
        return blog.topic === e.target.id;
      });
      setBlogList(newBlogList);
    }
  };

  return (
    <Box>
      <div className="home-image-box">
        <h1 className="home-title">Welcome to Easy Blog!</h1>
        {/* <h3 style={{ color: "orange", margin: "0px", padding: "0px" }}>
          Create & share the knowledge
        </h3> */}
      </div>
      <Typography
        variant="h5"
        color="myColor"
        fontWeight={500}
        sx={{ mt: "4vh", ml: "5vw" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr style={{ width: "95%", marginLeft: "0px" }} />
        </div>
        <strong>
          <marquee><em style={{color:"red"}}>Visit trending blogs...</em></marquee>
        </strong>
      </Typography>
      {blogs ? (
        <SlideShow />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0px",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <div
        style={{
          display: "flex",
          margin: "20px",
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {filters.map((filter, index) => (
          <button
            id={filter}
            key={index}
            className="filter-button"
            style={{
              height: filter === filterbtn ? "38px" : "35px",
              boxShadow: "2px 2px 6px grey",
              margin: "0px 0.5vw",
              backgroundColor:
                filter === filterbtn ? "black" : "rgba(190, 190, 190,0.6)",
              color: filter === filterbtn ? "rgba(190, 190, 190,0.8)" : "black",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "0px 15px",
              cursor: "pointer",
            }}
            onClick={(e) => filterHandler(e)}
          >
            {filter.substring(0, 1).toUpperCase() + filter.substring(1)}
          </button>
        ))}
      </div>
      <BlogCards blogs={blogList} />
      {userInfo && (
        <ThemeProvider theme={customTheme}>
          <Tooltip
            title="Write blog"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              backgroundImage: "linear-gradient(to left, red, #ff9100)",
            }}
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
      )}
    </Box>
  );
};
export default Home;
