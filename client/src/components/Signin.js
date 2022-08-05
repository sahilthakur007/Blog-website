import { Box, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useNavigate } from "react-router-dom";
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
    }
  return (
    <Box pt="100px" sx={{ display: "flex", justifyContent: "center",mt:"10vh" }}>
      <Box
        component="form"
        className="signup"
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
          sx={{ m: "8px", width: "90%",backgroundColor:"white" }}
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
          sx={{ m: "8px", width: "90%",backgroundColor:"white"}}
        />

        <ThemeProvider theme={customTheme}>
          <Button
            variant="contained"
            color="btn"
            onClick={formSubmitHandler}
            sx={{ width: "20vh", mt: "15px", mb: "40px" }}
          >
            Sign in
          </Button>
        <label>New user?</label>
        <Button variant="contained" color="secondary" sx={{ mt: "2px",mb:"1vh"}} onClick={()=>{navigate("/signup")}}>
        Create Account
          </Button>
          </ThemeProvider>
      </Box>
    </Box>
  );
};
export default Signin;
