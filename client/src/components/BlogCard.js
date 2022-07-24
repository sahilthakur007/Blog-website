import { Grid, Paper, Card, Typography, CardContent, CardActions, Button, Badge } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const BlogCard = () => {
    const [like,setLike]=useState(false)
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
              "url(https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20vw 26vh",
            boxShadow: "3px 3px 8px grey",
            borderRadius: "30px",
          }}
        ></Card>
        <Badge badgeContent="Technical" color="info" overlap="circular" component="Card">
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
            <Typography variant="h5" fontWeight={500}>
              <strong>
                <em>Blog Title</em>
              </strong>
            </Typography>
            <p style={{color:"grey",margin:"0px"}}>Author: Divya Kekade</p>
            <p style={{color:"grey",margin:"0px"}}>Date: 24-07-2022</p>
            <p>blog contents...</p>
          </CardContent>
          <CardActions sx={{ml:"11vw",mt:"2vh",display:"flex"}}>
              <Button onClick={()=>{setLike(!like)}} variant={like?"contained":"outlined"} color="error">{like?"Liked":"Like"}</Button> 
              <Button variant="outlined">Comment</Button>
          </CardActions>
        </Card>
        </Badge>
      </Box>
    </>
  );
};
export default BlogCard;
