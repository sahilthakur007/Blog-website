import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Button,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  Avatar,
  ListItemText,
  Box,
  IconButton,
  Divider,
  TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendComment, deleteBlog, addLike } from "../Redux/actions/blogsactoion"
export default () => {
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  const { id } = useParams();
  console.log(id)
  // if(blogs)
  console.log(blogs)
  const singleBlog = blogs?.find((blog) => blog._id == id)
  console.log(singleBlog)
  const [showComments, setShowCommnets] = useState(false);
  const { userInfo } = useSelector((state) => state.authReducer);
  // console.log(userInfo.user);
  const commentUserName = userInfo.user.name;
  console.log(commentUserName);
  const [Fcomment, setcomment] = useState({
    comment: "",
  });
  const [liked,setliked] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const commentHandler = () => {
    setShowCommnets(!showComments);
  }
  const handleComment = (e) => {
    setcomment({ ...Fcomment, [e.target.name]: e.target.value })
  }
  const submitComment = () => {
    // console.log(Fcomment);
    const newComment = { ...Fcomment, commentUserName }
    console.log(newComment)
    dispatch(sendComment(newComment, id))
  }
  const handleDelete = () => {
    console.log("clicked")
    dispatch(deleteBlog(id,navigate))
  }
  const handleEdit = () => {
    navigate(`/createblog/${id}`)
  }
  useEffect(() => {
    const id = userInfo.user._id;

    console.log(singleBlog.Likes);
    const present = singleBlog.Likes.find((like) => like.likedUser == id);
    if (present) setliked(true);
    // console.log(singleBlog.user);
  },[])
  const likeHandler = () => {
    const present = singleBlog.Likes.find((like) => like.likedUser == id);
    if (!present) dispatch(addLike(id));
    
    // setliked((prev) => !prev);
  }
  return (
    <>
      <Paper
        sx={{
          m: "30px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: "90px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {singleBlog.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: "40px",
            mr: "5%",
            textAlign: "right",
          }}
        >
          26 August 2022
        </Typography>

        <img src="https://source.unsplash.com/random" className="blogImage" />
        <Box
          sx={{
            display: "block",
            width: "90%",
            ml: "auto",
            mr: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "18px" },
              mt: "3%",
            }}
          >
            <p>
              {singleBlog.content}
            </p>
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            mt: "40px",
            mr: "5%",
            textAlign: "right",
          }}
        >
          Author: Sahil Thakur
        </Typography>
        {
          userInfo.user._id == singleBlog.userId && (
            <Stack
              spacing={2}
              direction="row"
              sx={{
                justifyContent: "right",
                alignItems: "center",
                mr: "5%",
                mt: "2%",
              }}
            >
              <IconButton onClick={handleEdit}
                size="large"
                sx={{
                  borderRadius: "100%",
                  p: "2px",
                }}
              >
                <EditIcon
                  sx={{
                    fontSize: "40px",
                    color: "#000",
                  }}
                />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon
                  sx={{
                    fontSize: "40px",
                    color: "#000",
                  }}
                />
              </IconButton>
            </Stack>
          )
        }
        <Stack
          spacing={2}
          direction="row"
          sx={{
            ml: "5%",
          }}
        >
          <IconButton onClick={likeHandler}>
            {
              liked ? (
                <ThumbUpIcon
                  sx={{
                    fontSize: "40px",
                    color: "#000",
                  }}
                />
              ) : (
                  <ThumbUpOutlinedIcon
                    sx={{
                      fontSize: "40px",
                      color: "#000",
                    }}
                  />
              )
            }
          </IconButton>
          
          <IconButton onClick={commentHandler}>
            <CommentIcon
              sx={{
                fontSize: "40px",
                color: "#000",
              }}
            />
          </IconButton>
        </Stack>
        <Divider />

        <List
          sx={{
            display: "block",
            mt: "4%",
            ml: "auto",
            mr: "auto",
            width: "90%",
          }}
        >
          {showComments && (<>
            <TextField name="comment" onChange={handleComment} fullWidth value={Fcomment.comment} placeholder="write your comment here" />
            <Box sx={{
              display: "flex",
              justifyContent: "right"
            }}>
              <Button onClick={submitComment} variant="contained" color="error" sx={{
                textTransform: "capitalize",
                mt: "2%",

              }} >Post</Button>
            </Box>
          </>
          )}
          {showComments &&
            singleBlog.comments.map((comment) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemAvatar>
                      <Avatar></Avatar>
                    </ListItemAvatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={`${comment.commentUserName
                      }   ${comment.commentOn}`}
                    secondary={comment.comment}
                  />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
        </List>
      </Paper>
    </>
  );
};
