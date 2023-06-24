const express = require("express");
const cookieParser = require('cookie-parser')
const app = express()
const multer = require("multer")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
//const cors = require('cors');

dotenv.config({path:"./config.env"})
require("./db/connect")
const User = require("./models/user")
const PORT = process.env.PORT | 8000;
//app.use(cors());
//link the router part
// app.use(multer({
//     dest: './router/auth.js'
//   }));

app.use(cookieParser())
app.use(express.json())
app.use(require('./router/auth'));


//middlewares

// const middlewares = (req,res,next)=>{
//     console.log("Hello middlewares")
//     next()
// }
//middlewares();
app.get("/",(req,res)=>{
    console.log("Call the middlewares")
    res.send("Hello World")
})
// app.get("/about",middlewares,(req,res)=>{
//     console.log("Call the middlewares")
//     res.send("Hello about us page")
// })
// app.get("/contact",(req,res)=>{
//     console.log("Call the middlewares")
//     res.send("Hello contact page")
// }) 

app.listen(PORT , (req,res)=>{
    console.log(`app is running on port ${PORT}`)
})