import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Paper,
  MenuItem,
  Button,
} from "@mui/material";

export default () => {
    const [blogdetails,setblogdetails] = useState({
        title: "",
        topic: "",
        content: "",
        image:""
    })

  const imageHandler = (e) => {
      let img = URL.createObjectURL(e.target.files[0]);
      setblogdetails({ ...blogdetails, [e.target.name]: img });
       
    };
    const handleChange = (e) => {
        console.log(e.target.value);
        setblogdetails({ ...blogdetails, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        console.log(blogdetails)
    }
  return (
    <Box
      sx={{
        mt: "100px",
      }}
    >
      <Paper
        sx={{
          m: "30px",
          p: "3%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Welcome to create your own blog
        </Typography>
              <TextField
                  name="topic"
                  
          select
          fullWidth
          label="select Your blog topic"
          sx={{
            mt: "6%",
                  }}
                  onChange ={handleChange}
        >
          <MenuItem value="technical">Technical</MenuItem>
          <MenuItem value="cooking">Cooking</MenuItem>
          <MenuItem value="history">History </MenuItem>
          <MenuItem value="music">Music</MenuItem>
          <MenuItem value="other">Music</MenuItem>
        </TextField>
        <TextField
          placeholder="enter title of your blog"
          fullWidth
          sx={{
            mt: "3%",
            mb: "3%",
                  }}
                  name="title"
                  value={blogdetails.title}
            onChange ={handleChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // width: "90%",
            mb: "3%",
          }}
        >
          <label>Upload image for your blog</label>
          <TextField
                      fullwidth
                      name = "image"
                      type="file"
                      value ={blogdetails.topic}
            onChange={(e) => {
              imageHandler(e);
            }}
          />
        </Box>
        <textarea
          placeholder="Write your blog here "
          rows={20}
          cols={102}
                  wrap="hard"
                  onChange={handleChange}
                  name= "content"
                  style={{ resize: "none", fontSize: "24px" }}
        ></textarea>
        <Button
          variant="contained"
                  color="warning"
                  onClick ={handleClick}
          sx={{
            mt: "3%",
            justifyContent: "center",
          }}
        >
          Post
        </Button>
      </Paper>
    </Box>
  );
};
