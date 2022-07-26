import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { sendBlog ,updateBlog} from "../Redux/actions/blogsactoion"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux";

import {
  TextField,
  Box,
  Typography,
  Paper,
  MenuItem,
  Button,
} from "@mui/material";

export default () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  const { id } = useParams();
  const singleBlog = blogs?.find((blog) => blog._id == id)
  console.log(id)
  const [image, setimage] = useState("");
  let initialState;
  if (id) {
    console.log(singleBlog)
    const { title, topic, content } = singleBlog;
    initialState = {
      title: title,
      topic: topic,
      content: content,

    }
  }
  else {
    initialState = {
      title: "",
      topic: "",
      content: "",

    }
  }

  const [blogdetails, setblogdetails] = useState(initialState)

  const imageHandler = (e) => {
    let img = e.target.files[0];
    setimage(URL.createObjectURL(img))
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setblogdetails({ ...blogdetails, [e.target.name]: e.target.value });
  }
  const handleClick = (e) => {
    const newblog = { ...blogdetails, image };
    dispatch(sendBlog(newblog, navigate));
    console.log(newblog)
  }
  const handleupdate = (e) => {
    const newblog = { ...blogdetails, image };
    dispatch(updateBlog(newblog,id,navigate));
    console.log(newblog)
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
          value={blogdetails.topic}
          select
          fullWidth
          label="select Your blog topic"

          sx={{
            mt: "6%",
          }}
          onChange={handleChange}
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
          onChange={handleChange}
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
            name="image"
            type="file"
            value={blogdetails.image}
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
          name="content"
          value = {blogdetails.content}
          style={{ resize: "none", fontSize: "24px" }}
        ></textarea>
        {
          !id ? (<Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleClick}
            sx={{
              mt: "3%",
              justifyContent: "center",
            }}
          >
            Post
          </Button>) : (
              <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={handleupdate}
                sx={{
                  mt: "3%",
                  justifyContent: "center",
                }}
              >
                Update Post
              </Button>
          )
        }
      </Paper>
    </Box >
  );
};
