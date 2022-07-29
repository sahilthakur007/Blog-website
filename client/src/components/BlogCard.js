import { Card, Typography, CardContent, CardActions, Button, Badge ,CardMedia} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", margin: "20px" }}>
        <Card
          sx={{
            backgroundColor: "#1fef",
            height: "26vh",
            width: "20vw",
            zIndex: "1",
            backgroundImage:
              `url(${blog.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "20vw 26vh",
            boxShadow: "3px 3px 8px grey",
            borderRadius: "30px",
          }}
        >

        </Card>

        <Badge badgeContent={blog.topic} color="info" overlap="circular" component="Card" sx={{textTransform:"capitalize"}}>
        <Card
          sx={{
            width: "36vw",
            height: "32vh",
          //  display: "flex",
            alignItems: "center",
            marginLeft: "-11vw",
            boxShadow: "3px 3px 8px grey",
            border: "1px solid grey",
            borderRadius: "8px",
          }}
        >
          <CardContent sx={{marginLeft:"11vw",display:"flex",flexDirection:"column"}}>
            <Typography variant="h5" fontWeight={500} sx ={{textTransform:"capitalize"}}>
              <strong>
                  <em>{blog.title}</em>
              </strong>
            </Typography>
            <p style={{color:"grey",margin:"0px"}}>Author: Divya Kekade</p>
            <p style={{color:"grey",margin:"0px"}}>Date: 24-07-2022</p>
            <p>blog contents...</p>
          </CardContent>
          <CardActions sx={{ml:"12vw",mt:"2vh"}}>
              <Button variant="outlined" onClick ={()=>navigate(`/singleblog/${blog._id}`)}>Read full blog</Button>
          </CardActions>
        </Card>
        </Badge>
      </Box>
    </>
  );
};
export default BlogCard;
