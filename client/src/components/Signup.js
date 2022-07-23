import { Box, Button, Card, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const [userinfo,setUserinfo]=useState({name:"",email:"",password:""})
    const [photo,setPhoto]=useState("")
    const userInputHandler=(e)=>{
        const updatedUserInfo={...userinfo}
        updatedUserInfo[e.target.id]=e.target.value
        setUserinfo(updatedUserInfo)
    }
    const photoHandler=(e)=>{
        let pic=e.target.files[0]
        setPhoto(URL.createObjectURL(pic))
    }
    const formSubmitHandler=(e)=>{
        console.log(userinfo)
        console.log(photo)
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
            type="text"
            id="name"
            label="name"
            placeholder="Your name"
            size="small"
            onChange={(e)=>userInputHandler(e)}
            sx={{ m: "8px", width: "90%" }}
          />
          <TextField
            required
            type="email"
            id="email"
            label="email"
            placeholder="Your email"
            size="small"
            onChange={(e)=>userInputHandler(e)}
            sx={{ m: "8px", width: "90%" }}
          />
          <TextField
            required
            type="password"
            id="password"
            label="password"
            placeholder="Your password"
            size="small"
            onChange={(e)=>userInputHandler(e)}
            sx={{ m: "8px", width: "90%" }}
          />
          <Box sx={{display:"flex",flexDirection:"column",width:"90%",mt:"10px"}}>
          <label>Upload your profile photo</label> 
          <TextField
            type="file"
            size="small"
            onChange={(e)=>{photoHandler(e)}}
          />
          </Box>
          <ThemeProvider theme={customTheme}>
            <Button
              variant="contained"
              color="myColor"
              onClick={formSubmitHandler}
              sx={{ width: "40%", mt: "15px", mb: "40px" }}
            >
              Sign up
            </Button>
          </ThemeProvider>
          <label style={{ color: "grey" }}>Account already exists?</label>
          <Link to="/signin"><Button color="secondary" variant="contained" sx={{mt:"2px"}}>Sign in</Button></Link>
        </Box>
      </Box>
  );
};
export default Signup;