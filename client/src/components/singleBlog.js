import React, { useState } from "react";
import { Typography, Paper, Button, Stack, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, Avatar, ListItemText, Box, IconButton, Divider } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
export default () => {
    const [showComments, setShowCommnets] = useState(false);
    const comments = [
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },
        {
            commentId: 1,
            user: "Super Cops",
            date: "26/08/2022",
            comment: "This is very imformative blog keep sharing."

        },

    ]
    const commentHandler = () => {
        setShowCommnets(!showComments);
    }
    return (
        <>
            <Paper sx={{
                m: "30px",
                
            }}>
                <Typography variant="h2" sx={{
                    mt: "90px",
                    textAlign: "center",
                    fontWeight: 500
                }}>TechFusion</Typography>
                <Typography variant="h6" sx={{
                    mt: "40px",
                    mr: "5%",
                    textAlign: "right"
                }}>26 August 2022</Typography>

                <img src="https://source.unsplash.com/random" className="blogImage" />
                <Box sx={{
                    display: "block",
                    width: "90%",
                    ml: "auto",
                    mr: "auto",

                }}>
                    <Typography sx={{
                        fontSize: { lg: "18px" },
                        mt: "3%"
                    }} >
                        <p>    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere

                        Ruler
                    </Typography>
                </Box>
                <Stack spacing={2} direction="row" sx={{
                    justifyContent: "right",
                    alignItems: "center",
                    mr: "5%",
                    mt: "2%"
                }}>
                    <IconButton size="large" sx={{
                        borderRadius: "100%",
                        p: "2px"
                    }} >
                        <EditIcon sx={{
                            fontSize: "40px",
                            color: "#000",


                        }} />
                    </IconButton>
                    <IconButton >
                        <DeleteIcon sx={{
                            fontSize: "40px",
                            color: "#000",

                        }} />
                    </IconButton>

                </Stack>
                <Stack spacing={2} direction="row" sx={{
                    ml: "5%"

                }}>
                    <IconButton >
                        <ThumbUpIcon sx={{
                            fontSize: "40px",
                            color: "#000"
                        }} />
                    </IconButton>
                    <IconButton >
                        <ThumbDownIcon sx={{
                            fontSize: "40px",
                            color: "#000"
                        }} />
                    </IconButton>
                    <IconButton onClick={commentHandler}>
                        <CommentIcon sx={{
                            fontSize: "40px",
                            color: "#000",

                        }} />
                    </IconButton>

                </Stack>
               <Divider/>
                    
                
                    <List sx={{
                        display: "block",
                        mt:"4%",
                        ml: "auto",
                        mr: "auto",
                        width:"90%"
                    }}>
                        {
                            showComments && (
                                comments.map((comment) => (
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <ListItemAvatar>
                                                    <Avatar>

                                                    </Avatar>
                                                </ListItemAvatar>
                                            </ListItemIcon>
                                            <ListItemText primary={`${comment.user}   ${comment.date}`} secondary={comment.comment} />
                                        </ListItemButton>
                                        <Divider />
                                    </ListItem>
                                ))
                            )
                        }
                    </List>
               
            </Paper>
        </>
    )
}