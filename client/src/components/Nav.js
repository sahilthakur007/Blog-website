import React from "react";
import "../App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { customTheme } from "../Theme";
import { useSelector, useDispatch } from "react-redux";
import { filterBySearch } from "../Redux/actions/filterAction";
import { logoutUser } from "../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  // blog array

  // add search filter here
  const [searchValue, setSearchValue] = useState("");
  const [sidebar,setSidebar]=useState(false);
  const searchHandler = (e) => {
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <Button variant="outlined" color="white" onClick={searchHandler}>
                Search
              </Button>
            </div>
            {!sidebar && <div className="nav-menu-icon">
              <DehazeIcon onClick={()=>{setSidebar(!sidebar)}}/>
            </div>}
            {sidebar && <Sidebar logout={handleLogout} userinfo={userInfo} close={()=>{setSidebar(!sidebar)}}/>}
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
                onClick={() => navigate("/about")}
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
                    onClick={()=>navigate("/profile")}
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
                    alt={userInfo.user.name}
                    src={userInfo.user.photo}
                    onClick={()=>{navigate("./profile")}}
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
