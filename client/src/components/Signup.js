import { Box, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import FileBase from "react-file-base64";
import { useState } from "react";
import { loginUser } from "../Redux/actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const userInputHandler = (e) => {
    const updatedUserInfo = { ...userinfo };
    updatedUserInfo[e.target.id] = e.target.value;
    setUserinfo(updatedUserInfo);
  };

  const formSubmitHandler = (e) => {
    dispatch(loginUser(userinfo, navigate));
  };

  return (
    <Box
      pt="100px"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "10vh",
      }}
    >
      <Box component="form" className="signup">
        <TextField
          required
          type="text"
          id="name"
          label="name"
          placeholder="Your name"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%",backgroundColor:"white" }}
        />
        <TextField
          required
          type="email"
          id="email"
          label="email"
          placeholder="Your email"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%",backgroundColor:"white" }}
        />
        <TextField
          required
          type="password"
          id="password"
          label="password"
          placeholder="Your password"
          size="small"
          onChange={(e) => userInputHandler(e)}
          sx={{ m: "8px", width: "90%",backgroundColor:"white" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            mt: "10px",
          }}
        >
          <label>Upload your profile photo</label>
          <div
            className="formComponent"
            style={{
              border: "1px solid gray",
              padding: "1%",
              borderRadius: "4px",
              backgroundColor:"white"
            }}
          >
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setUserinfo({ ...userinfo, photo: base64 })
              }
            ></FileBase>
          </div>
        </Box>
        <ThemeProvider theme={customTheme}>
          <Button
            variant="contained"
            color="btn"
            onClick={formSubmitHandler}
            sx={{
              width: "20vh",
              mt: "15px",
              mb: "40px",
            }}
          >
            Sign up
          </Button>
        <label>Account already exists?</label>
        <Button
          color="black"
          variant="outlined"
          sx={{ mt: "2px", mb: "1vh",border:"1px solid black" }}
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </Button>
        </ThemeProvider>
      </Box>
    </Box>
  );
};
export default Signup;
