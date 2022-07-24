import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Paper,
  MenuItem,
  Button,
} from "@mui/material";
import Context from "@mui/base/TabsUnstyled/TabsContext";
export default () => {
  const [image, setImage] = useState("");
  const imageHandler = (e) => {
    let img = e.target.files[0];
    setImage(URL.createObjectURL(img));
  };
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
          select
          fullWidth
          label="select Your blog topic"
          sx={{
            mt: "6%",
          }}
        >
          <MenuItem value="music">Technical</MenuItem>
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
            type="file"
            onChange={(e) => {
              imageHandler(e);
            }}
          />
        </Box>
        <textarea
          placeholder="Write your blog here "
          rows={20}
          cols={182}
          wrap="hard"
          style={{ resize: "none" }}
        ></textarea>
        <Button
          variant="contained"
          color="warning"
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
