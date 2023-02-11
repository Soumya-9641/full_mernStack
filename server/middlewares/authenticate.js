const User = require("../models/user")
const express = require('express');
const jwt = require("jsonwebtoken")
// const app = express();
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
const authenticate= async(req,res,next)=>{
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,"mynameissoumyadipgantait");

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if(!rootUser){
            throw new Error("User not found")
        }
        req.token = token;
        req.rootUser=rootUser;
        req.userID = rootUser._id;
        next();
    }catch(err){
         res.status(401).send("unauthorised no authentication")
        console.log(err)
    }
}

module.exports = authenticate;