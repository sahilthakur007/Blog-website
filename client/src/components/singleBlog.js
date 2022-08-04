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
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from "@mui/icons-material/Comment";
import dateFormat from "dateformat";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendComment, deleteBlog, addLike, storeallblogs } from "../Redux/actions/blogsactoion"
export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getBlogs = async () => {
      dispatch(storeallblogs());
    };
    getBlogs();
  }, []);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  const { id } = useParams();
  // if(blogs)
  const singleBlog = blogs?.find((blog) => blog._id == id)
  const [showComments, setShowCommnets] = useState(false);
  const { userInfo } = useSelector((state) => state.authReducer);

  let commentUserName;
  if (userInfo)
    commentUserName = userInfo.user.name;
  const [Fcomment, setcomment] = useState({
    comment: "",
  });
  const [liked, setliked] = useState(false);

  const commentHandler = () => {
    setShowCommnets(!showComments);
  }
  const handleComment = (e) => {
    setcomment({ ...Fcomment, [e.target.name]: e.target.value })
  }
  const submitComment = () => {
  
    if (userInfo)
    {
      const newComment = { ...Fcomment, commentUserName }

      dispatch(sendComment(newComment, id))
     }
  }
  const handleDelete = () => {
    dispatch(deleteBlog(id, navigate))
  }
  const handleEdit = () => {
    navigate(`/createblog/${id}`)
  }
  useEffect(() => {
    let userid;
    if (userInfo)
      userid = userInfo.user._id;
    
    if (singleBlog) {
      const present = singleBlog.Likes.find((like) => like.likedUser == userid);

      if (present) setliked(true)
   }
 
  }, [])

  if (!singleBlog) {
    return (<>Loading</>)
  }
  const likeHandler = () => {
    
    const present = singleBlog.Likes.find((like) => like.likedUser == userInfo.user._id);
  

    // if (!present) {
      dispatch(addLike(id));
      setliked(true);
    // };

    // setliked((prev) => !prev);
  }
  return (
    <>
      <Paper
        sx={{
          m: "30px",
        }}
      >
        {blogs && (
          <>
            <Typography
              variant="h3"
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
              {dateFormat(singleBlog.createdAt,"mmmm dS, yyyy")}
            </Typography>

            <img src={singleBlog.image} className="blogImage" />
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
              userInfo && userInfo.user._id == singleBlog.userId && (
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
            {userInfo && (<Stack
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
            </Stack>)}
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
                    backgroundImage: "linear-gradient(to left, red, #ff9100)" 

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
          </>
        )}
      </Paper>
    </>
  );
};
