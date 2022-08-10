import { Card, Typography, CardContent, Button, Badge } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import dateFormat from "dateformat";
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="blogcard-box">
        <div className="blogcard-left-part">
          <Box
            className="blogcard-image"
            sx={{
              backgroundImage: `url(${blog.image})`,
            }}
          >
            {/* <ThemeProvider theme={customTheme}>
            <div onClick={() => navigate(`/singleblog/${blog._id}`)}>
              <Button color="white">
                Read full blog<OpenInNewIcon color="white"></OpenInNewIcon>
              </Button>
            </div>
          </ThemeProvider> */}
          </Box>
          <Button
            onClick={() => navigate(`/singleblog/${blog._id}`)}
            variant="contained"
            size="small"
            sx={{
              borderRadius: "15px",
              backgroundImage: "linear-gradient(to left, red, #ff9100)",
              zIndex: "3",
              mt: "-15px",
            }}
          >
            Read Full Blog{" "}
            <OpenInNewIcon color="white" fontSize="small"></OpenInNewIcon>
          </Button>
        </div>
        <Badge
          badgeContent={blog.topic}
          color="info"
          overlap="circular"
          component="Card"
          sx={{ textTransform: "capitalize" }}
        >
          <Card className="blogcard-info">
            <CardContent className="blogcard-cardcontent">
              <Typography
                variant="h5"
                fontWeight={500}
                sx={{ textTransform: "capitalize" }}
              >
                <strong>
                  <em>{blog.title}</em>
                </strong>
              </Typography>
              <p style={{ color: "grey", margin: "0px" }}>
                Author: {blog.author}
              </p>
              <p style={{ color: "grey", margin: "0px" }}>
                Date: {dateFormat(blog.createdAt, "mmmm dS, yyyy")}
              </p>
              <p style={{ textTransform: "none" }}>{blog.content}</p>
            </CardContent>
          </Card>
        </Badge>
      </Box>
    </>
  );
};
export default BlogCard;
