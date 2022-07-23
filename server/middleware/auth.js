const jwt = require("jsonwebtoken"); 
const User = require("../model/user");

export const authenticate = async (req,res) => {
    const token = req.header.Authorization.spilt(" ")[1];
    const decodedToken = jwt.decode(token, user);
    const id = decodedToken.id;
    req.user = await User.findById({id});
    next();
}
