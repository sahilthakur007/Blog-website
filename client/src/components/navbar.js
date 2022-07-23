import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Stack, Box, TextField, Typography, Button } from "@mui/material"
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useSelector, useDispatch } from "react-redux"; 

import { logoutUser } from "../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";
export default () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userInfo} = useSelector((state) => state.authReducer);
    console.log(userInfo)
    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <>
            <ThemeProvider theme={customTheme}>
            <AppBar color="error" sx={{
                height: "80px",
                pt: "10px",
               
            }}>
                <Toolbar >
                    <Typography variant ="h5" fontWeight={500}>
                        <strong><em>Easy Blog </em></strong>
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                    }}>
                        <TextField placeholder="search" size="small" sx={{
                           
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
                            
                                userInfo && (<>
                                <Button color="inherit" sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                }}>My Blogs</Button>
                                <Button color="inherit" sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                    }}>Profile</Button>
                                <Button color="inherit" onClick={handleLogout} sx={{
                                    fontSize: "19px",
                                    textTransform: 'none'
                                }}>Logout</Button>
                                </>)
                            
                        }
                     
                            {!userInfo && <Button color="inherit" sx={{
                            fontSize: "19px",
                            textTransform: 'none'
                            }}
                            onClick = {()=>{navigate("/signup")}}
                            >Login</Button>}
                    </Stack>
                    
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </>
    )
}