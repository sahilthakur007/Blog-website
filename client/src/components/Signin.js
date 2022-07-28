import { Box, Button, Card, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInUser } from "../Redux/actions/authAction";
import { useDispatch } from "react-redux";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [userinfo,setUserinfo]=useState({email:"",password:""})
    const userInputHandler=(e)=>{
        const updatedUserInfo={...userinfo}
        updatedUserInfo[e.target.id]=e.target.value
        setUserinfo(updatedUserInfo)
    }
  const formSubmitHandler = (e) => {
         dispatch(signInUser(userinfo,navigate))
        // console.log(userinfo)
    }
  return (
    <Box pt="100px" sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        sx={{
          width: "45%",
          backgroundColor: "white",
          p: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "15px",
          alignItems: "center",
          boxShadow: "2px 2px 6px grey",
        }}
      >
        <TextField
          required
          type="email"
          id="email"
          label="email"
          placeholder="Your email"
          size="small"
          value={userinfo.email}
          onChange={userInputHandler}
          sx={{ m: "8px", width: "90%" }}
        />
        <TextField
          required
          type="password"
          id="password"
          label="password"
          placeholder="Your password"
          size="small"
          value={userinfo.password}
          onChange={(e)=>userInputHandler(e)}
          sx={{ m: "8px", width: "90%" }}
        />

        <ThemeProvider theme={customTheme}>
          <Button
            variant="contained"
            color="error"
            onClick={formSubmitHandler}
            sx={{ width: "40%", mt: "15px", mb: "40px", backgroundImage: "linear-gradient(to left, red, #ff9100)" }}
          >
            Sign in
          </Button>
        </ThemeProvider>
        <label style={{ color: "grey" }}>New user?</label>
        <Button variant="contained" color="secondary"sx={{ mt: "2px"}} onClick={()=>{navigate("/signup")}}>
        Create Account
          </Button>
      </Box>
    </Box>
  );
};
export default Signin;
