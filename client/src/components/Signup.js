import { Box, Button, TextField } from "@mui/material";

const Signup = () => {
  return (
    <Box pt="80px" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "65%", backgroundColor: "pink", p: "2%" ,display: "flex",borderRadius:"5px"}}>
        <Box
          component="form"
          sx={{
            width: "50%",
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
            id="outlined-required"
            label="name"
            placeholder="Your name"
            size="small"
            sx={{ m: "8px", width: "90%" }}
          />
          <TextField
            required
            type="email"
            id="outlined-required"
            label="email"
            placeholder="Your email"
            size="small"
            sx={{ m: "8px", width: "90%" }}
          />
          <TextField
            required
            type="password"
            id="outlined-required"
            label="password"
            placeholder="Your password"
            size="small"
            sx={{ m: "8px", width: "90%" }}
          />
          <Button
            variant="contained"
            color="error"
            sx={{ width: "40%", mt: "15px",mb:"40px"}}
          >
            Sign up
          </Button>
          <label style={{color:"grey"}}>Account already exists?</label>
          <Button color="secondary">Sign in</Button>
        </Box>
        <Box>
          <img src="" alt="login img"/>
      </Box>
      </Box>
    </Box>
  );
};
export default Signup;
