const express = require("express");
const { isauthenticate } = require("../middleware/auth")
const { storeBlog, sendAllBlogs, deleteSingleBlog, updateBlog, addComment, addLike } = require("../controllers/blogController")
const Router = express.Router();

Router.route("/storeBlog").post(isauthenticate,storeBlog)
Router.route("/getAllBlogs").get(sendAllBlogs)
Router.route("/storeBlog").post(isauthenticate, storeBlog)
Router.route("/deleteblog/:id").patch(isauthenticate,deleteSingleBlog)
Router.route("/updateblog/:id").patch(isauthenticate,updateBlog)
Router.route("/addcomment/:id").post(isauthenticate,addComment)
Router.route("/addlike/:id").patch(isauthenticate, addLike)

module.exports = Router 