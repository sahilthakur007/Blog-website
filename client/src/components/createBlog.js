import React from "react"
import { TextField ,Box, Typography,Paper, MenuItem, Button} from "@mui/material"
import Context from "@mui/base/TabsUnstyled/TabsContext"
export default () => {
    return (
        <Box sx={{
            mt:"100px"
        }}>
            <Paper sx={{
                m: "30px",
                p: "3%",
                
            }}>
                <Typography variant="h3" sx={{
                    textAlign: "center",
                    fontWeight: 500
                }}  >
                    Welcome to you create your own blog
                </Typography>
                <TextField select fullWidth label="select Your blog topic" sx={{
                    mt:"6%"
                }}>
                    <MenuItem value = "music">Technical</MenuItem>
                    <MenuItem value = "cooking">Cooking</MenuItem>
                    <MenuItem value = "history">History </MenuItem>
                    <MenuItem value = "music">Music</MenuItem>
                    <MenuItem value = "other">Music</MenuItem>
                </TextField>
                <TextField placeholder="enter title of your blog" fullWidth sx={{
                    mt: "3%",
                    mb:"3%"
                }} />
                <textarea placeholder ="Write your blog here "rows={20} cols={182} wrap="hard" style={{resize:"none"}}>

                </textarea>
                <Button variant="contained" color="warning" sx={{
                    mt: "3%",
                    justifyContent:"center"
                }}>Post</Button>
            </Paper>
        </Box>
    )
}