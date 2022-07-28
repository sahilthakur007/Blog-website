import { Fab, Stack, Typography, Box, Tooltip } from "@mui/material";
import "react-slideshow-image/dist/styles.css";
import BlogCards from "./BlogCards";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useNavigate } from "react-router-dom";
import blogs from "../BlogData";
import { useState } from "react";
import SlideShow from "./SlideShow";

const filters = [
  "All",
  "Trending",
  "Technical",
  "Environmental",
  "Music",
  "History",
  "Cooking",
  "Tourism",
  "Health",
];

const Home = () => {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState(blogs);
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
          backgroundImage:
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
          <em>Blogs trending these days...</em>
        </strong>
      </Typography>
      <SlideShow />
      <Stack direction="row" spacing={2} sx={{ m: "20px" }}>
        {filters.map((filter) => (
          <Fab
            variant="extended"
            id={filter}
            key={filter}
            sx={{
              height: "40px",
              width: "auto",
              boxShadow: "0px 1px 6px grey",
            }}
            onClick={(e) => filterHandler(e)}
          >
            {filter}
          </Fab>
        ))}
      </Stack>
      {/* </Slide> */}
      <BlogCards blogs={blogList} />
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
