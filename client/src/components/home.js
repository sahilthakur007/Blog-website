import { Fab, Stack,Typography, Box, Tooltip } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import BlogCards from "./BlogCards";
import EditIcon from '@mui/icons-material/Edit'
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useNavigate } from "react-router-dom";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
  {
    url: "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 4",
  },
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
  const navigate =useNavigate();
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
      <Typography variant="h5" color="myColor" fontWeight={500} sx={{mt:"4vh",ml:"5vw"}} >
          <strong><em>Blogs trending these days...</em></strong>
      </Typography>
      <div style={{ marginTop: "2vh" }}>
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: "70vh",
                  width: "80vw",
                  backgroundSize: "80vw 70vh",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h2>Blog Title</h2>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {/* <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each.url} alt="sample" style={{height:"25vw"}}/>
              </div>
            ))}
          </Slide> */}
        <Stack direction="row" spacing={2} sx={{m:"20px"}}>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>All</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Trending</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Technical</Fab>
            <Fab variant="extended" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Environmental</Fab>
        </Stack>
        {/* <Stack direction="row" spacing={2} sx={{m:"10px"}}>
            <Chip label="All" sx={{boxShadow:"0px 1px 6px grey"}}>All</Chip>
            <Chip variant="outlined" label="Technical" sx={{boxShadow:"0px 0.5px 6px grey"}}>Trending</Chip>
            <Chip label="Trending" sx={{height:"40px",boxShadow:"0px 1px 6px grey"}}>Technical</Chip>
        </Stack> */}
        <BlogCards />
        <ThemeProvider theme={customTheme}>
        <Tooltip title="Write blog" sx={{position:"fixed", bottom:20, right:20}}>
        <Fab variant="extended" color="myColor" aria-label="add" onClick={()=>{navigate("/createBlog")}}>
        <EditIcon sx={{ mr: 1 }} />
        New Blog
        </Fab>
        </Tooltip>
        </ThemeProvider>
    </Box>
  );
};
export default Home;
