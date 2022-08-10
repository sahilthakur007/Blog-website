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
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import { customTheme } from "../Theme";
import { ThemeProvider } from "@mui/material";
import dateFormat from "dateformat";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  sendComment,
  deleteBlog,
  addLike,
  storeallblogs,
  removeLike,
} from "../Redux/actions/blogsactoion";
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
  const singleBlog = blogs?.find((blog) => blog._id == id);
  const [showComments, setShowCommnets] = useState(false);
  const { userInfo } = useSelector((state) => state.authReducer);

  let commentUserName;
  if (userInfo) commentUserName = userInfo.user.name;
  const [Fcomment, setcomment] = useState({
    comment: "",
  });
  const [liked, setliked] = useState(false);

  const commentHandler = () => {
    setShowCommnets(!showComments);
  };
  const handleComment = (e) => {
    setcomment({ ...Fcomment, [e.target.name]: e.target.value });
  };
  const submitComment = () => {
    if (userInfo) {
      const newComment = { ...Fcomment, commentUserName };
      setShowCommnets(true);
      dispatch(sendComment(newComment, id));
    }
  };
  const handleDelete = () => {
    dispatch(deleteBlog(id, navigate));
  };
  const handleEdit = () => {
    navigate(`/createblog/${id}`);
  };
  useEffect(() => {
    let userid;
    if (userInfo) userid = userInfo.user._id;

    if (singleBlog) {
      const present = singleBlog.Likes.find((like) => like.likedUser == userid);

      if (present) setliked(true);
      else setliked(false);
    }
  }, []);

  if (!singleBlog) {
    return <>Loading</>;
  }
  const likeHandler = () => {
    const present = singleBlog.Likes.find(
      (like) => like.likedUser == userInfo.user._id
    );

    if (!present) {
      dispatch(addLike(id));
      setliked(true);
    } else {
      dispatch(removeLike(id, userInfo.user._id));
      setliked(false);
    }
  };
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Paper
          sx={{
            m: "30px",
            mt: "90px",
            boxShadow:"0px 0px 8px grey"
          }}
        >
          {blogs && (
            <>
              <div style={{ display: "flex", justifyContent: "right" }}>
                <Button
                  variant="contained"
                  sx={{
                    m: "1%",
                    backgroundImage: "linear-gradient(to left, red, #ff9100)",
                  }}
                >
                  Save
                </Button>
              </div>
              <Typography
                variant="h3"
                sx={{
                  mt: "2vh",
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
                {dateFormat(singleBlog.createdAt, "mmmm dS, yyyy")}
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
                  <p>{singleBlog.content}</p>
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
                Author: {singleBlog.author}
              </Typography>
              {userInfo && userInfo.user._id == singleBlog.userId ? (
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
                  <IconButton
                    onClick={handleEdit}
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
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    marginRight: "8%",
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      backgroundImage: "linear-gradient(to left, red, #ff9100)",
                    }}
                  >
                    View Profile
                  </Button>
                </div>
              )}
              {userInfo && (
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    ml: "5%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <IconButton onClick={likeHandler}>
                      {liked ? (
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
                      )}
                    </IconButton>
                    <h3
                      stye={{ margin: "0px", padding: "0px", marginTop: "1vh" }}
                    >
                      ({singleBlog.Likes.length})
                    </h3>
                  </div>
                  <div style={{ display: "flex" }}>
                    <IconButton onClick={commentHandler}>
                      <CommentIcon
                        sx={{
                          fontSize: "40px",
                          color: "#000",
                        }}
                      />
                    </IconButton>
                    <h3
                      stye={{ margin: "0px", padding: "0px", marginTop: "1vh" }}
                    >
                      ({singleBlog.comments.length})
                    </h3>
                  </div>
                </Stack>
              )}
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
                {showComments && (
                  <>
                    <TextField
                      name="comment"
                      onChange={handleComment}
                      fullWidth
                      value={Fcomment.comment}
                      placeholder="write your comment here"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                      }}
                    >
                      <Button
                        onClick={submitComment}
                        variant="contained"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          mt: "2%",
                          backgroundImage:
                            "linear-gradient(to left, red, #ff9100)",
                        }}
                      >
                        Post
                      </Button>
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
                          primary={`${comment.commentUserName}  ${dateFormat(
                            comment.commentOn,
                            "mmmm dS, yyyy, h:MM:ss TT"
                          )}`}
                          secondary={comment.comment}
                        />
                      </ListItemButton>
                      <Divider />
                    </ListItem>
                  ))}
              </List>
              <div
                style={{
                  display: "flex",
                  flexDirection: "coloumn",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="edit-request-div"
                  style={{ marginBottom: "1vh" }}
                >
                  <h3 style={{ margin: "0px", padding: "0px" }}>
                    Want to edit and contribute to this blog?
                  </h3>
                </div>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    ml: "1vw",
                    mb: "1vh",
                    backgroundImage: "linear-gradient(to left, red, #ff9100)",
                  }}
                >
                  Request to edit
                </Button>
              </div>
            </>
          )}
        </Paper>
      </ThemeProvider>
    </>
  );
};
