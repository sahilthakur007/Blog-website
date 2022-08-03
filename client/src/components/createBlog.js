import React, { useState } from "react";
import { useDispatch } from "react-redux"
import FileBase from "react-file-base64"
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
const options = [
  "Technical",
  "Environmental",
  "Music",
  "History",
  "Cooking",
  "Tourism",
  "Health",
];
export default () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  const { id } = useParams();
  const singleBlog = blogs?.find((blog) => blog._id == id)
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
      image:""

    }
  }

  const [blogdetails, setblogdetails] = useState(initialState)

  const imageHandler = (e) => {
    let img = e.target.files[0];
    setimage(URL.createObjectURL(img))
  };
  const handleChange = (e) => {
    setblogdetails({ ...blogdetails, [e.target.name]: e.target.value });
  }
  const handleClick = (e) => {
    // const newblog = { ...blogdetails, image };
    dispatch(sendBlog(blogdetails, navigate));
  }
  const handleupdate = (e) => {
   
    dispatch(updateBlog(blogdetails,id,navigate));
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
          {options.map((option)=>{return <MenuItem key={option} value={option.toLowerCase()}>{option}</MenuItem>})}
        </TextField>
        <TextField
          placeholder="enter title of your blog"
          label="title"
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
          <div className="formComponent" style={{
            border: "1px solid gray",
            padding: "1%",
            borderRadius: "4px"
          }}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setblogdetails({ ...blogdetails, image: base64 })}></FileBase>
          </div>
        </Box>
        <textarea
          placeholder="Write your blog here "
          // rows={20}
          // cols={102}
          wrap="hard"
          onChange={handleChange}
          name="content"
          value = {blogdetails.content}
          style={{ resize: "none", fontSize: "24px", width:"99%",height:"50vh"}}
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
              backgroundImage: "linear-gradient(to left, red, #ff9100)"
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
                  backgroundImage: "linear-gradient(to left, red, #ff9100)"
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
