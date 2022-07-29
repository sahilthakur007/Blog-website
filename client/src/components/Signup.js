import { Box, Button, Card, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64"
import { useState } from "react";
import { loginUser } from "../Redux/actions/authAction"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({ name: "", email: "", password: "",photo:"" })
 
  const userInputHandler = (e) => {
    const updatedUserInfo = { ...userinfo }
    updatedUserInfo[e.target.id] = e.target.value
    setUserinfo(updatedUserInfo)
  }
 
  const formSubmitHandler = (e) => {


    dispatch(loginUser(userinfo,navigate));
 
  }
  
  return (
    <Box pt="100px" sx={{ display: "flex", justifyContent: "center",mt:"10vh" }}>
      <Box
        component="form"
        sx={{
          width: "65vw",
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
          type="text"
          id="name"
          label="name"
          placeholder="Your name"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%" }}
        />
        <TextField
          required
          type="email"
          id="email"
          label="email"
          placeholder="Your email"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%" }}
        />
        <TextField
          required
          type="password"
          id="password"
          label="password"
          placeholder="Your password"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "90%", mt: "10px" }}>
          <label>Upload your profile photo</label>
          <div className="formComponent" style={{
            border: "1px solid gray",
            padding: "1%",
            borderRadius:"4px"
          }}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setUserinfo({ ...userinfo, photo: base64 })}></FileBase>
          </div>
        </Box>
        <ThemeProvider theme={customTheme}>
          <Button
            variant="contained"
            color="myColor"
            onClick={formSubmitHandler}
            sx={{ width: "20vh", mt: "15px", mb: "40px",backgroundImage: "linear-gradient(to left, red, #ff9100)"}}
          >
            Sign up
          </Button>
        </ThemeProvider>
        <label style={{ color: "grey" }}>Account already exists?</label>
        <Button color="secondary" variant="contained" sx={{ mt: "2px",mb:"1vh" }} onClick={()=>{navigate("/signin")}}>Sign in</Button>
      </Box>
    </Box>
  );
};
export default Signup;
