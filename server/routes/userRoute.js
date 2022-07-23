const express = require("express"); 
const Router = express.Router();
const {login,signIn} = require("../controllers/userController")
Router.route("/login").post(login); 
Router.route("/signin").get(signIn); 
module.exports = Router;