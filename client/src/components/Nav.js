import React from "react";
import "../App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { customTheme } from "../Theme";
import { useSelector, useDispatch } from "react-redux";
import { filterBySearch } from "../Redux/actions/filterAction";
import { logoutUser } from "../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  // blog array

  // add search filter here
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    // if(searchValue !== "")
    // {
    //   blogs.filter((blog)=>{
    //     return blog.title.toLowerCase().includes(searchValue.toLowerCase())
    //   })
    // }
    // console.log(searchValue)
    dispatch(filterBySearch(searchValue));
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppBar
          sx={{
            backgroundImage: "linear-gradient(to left, red, #ff9100)",
            height: "70px",
          }}
        >
          <Toolbar>
            <Typography variant="h5" className="nav-logo">
              <strong>
                <em>Easy Blog </em>
              </strong>
            </Typography>
           
            <div className="nav-search-bar">
              <TextField
                placeholder="type to search..."
                size="small"
                value={searchValue}
                sx={{
                  backgroundColor: "#fff",
                  ml: "3vw",
                  width: "20vw",
                  borderRadius: "4px",
                  mr: "8px",
                }}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <Button variant="outlined" color="white" onClick={searchHandler}>
                Search
              </Button>
            </div>
            <div className="nav-menu-icon">
              <DehazeIcon />
            </div>
            <div className="nav-buttons">
              <Button
                onClick={() => navigate("/")}
                color="inherit"
                sx={{
                  fontSize: "19px",
                  textTransform: "none",
                  mr:"1vw"
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "19px",
                  textTransform: "none",
                  mr:"1vw",
                  ml:"1vw"
                }}
              >
                About
              </Button>
              {userInfo && (
                <>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                      mr:"1vw",
                  ml:"1vw"
                    }}
                    onClick={() => navigate("/myblog")}
                  >
                    My Blogs
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                      mr:"1vw",
                  ml:"1vw"
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    color="inherit"
                    onClick={handleLogout}
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                      mr:"1vw",
                  ml:"1vw"
                    }}
                  >
                    Logout
                  </Button>
                  <Avatar
                    alt="Profile photo"
                    src="/static/images/avatar/1.jpg"
                  />
                </>
              )}

              {!userInfo && (
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "19px",
                    textTransform: "none",
                  ml:"1vw"
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
export default Nav;
