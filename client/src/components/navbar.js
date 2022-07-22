import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Stack, Box, TextField, Typography, Button } from "@mui/material"

export default () => {
    const [user, setuser] = useState(true);
    return (
        <>
            <AppBar color="error" sx={{
                height: "80px",
                pt: "10px",
               
            }}>
                <Toolbar >
                    <Typography variant ="h5" fontWeight={500}>
                        <strong><em>Easy Bog </em></strong>
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                    }}>
                        <TextField placeholder="search" sx={{
                           
                            backgroundColor: "#fff",
                            ml: "50px",
                            width: "400px",
                            borderRadius:"4px"

                        }} />
                    </Box>
                    <Stack direction = "row" spacing ={2}>
                        <Button color="inherit" sx={{
                            fontSize: "19px",
                            textTransform: 'none'
                        }}>Home</Button>
                        <Button color="inherit" sx={{
                            fontSize: "19px",
                            textTransform: 'none'
                        }}>About</Button>
                        {
                            
                            user && (<>
                                <Button color="inherit" sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                }}>My Blogs</Button>
                                <Button color="inherit" sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                    }}>Profile</Button>
                                <Button color="inherit" sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                }}>Logout</Button>
                                </>)
                            
                        }
                     
                        {!user && <Button color="inherit" sx={{
                            fontSize: "17px",
                            textTransform: 'none'
                        }}>Login</Button>}
                    </Stack>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}