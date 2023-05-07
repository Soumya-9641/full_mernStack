const express = require("express");
const Campaign = require("../models/campaign");
const router = express.Router()


router.get("/",(req,res)=>{
    console.log(hello);
})

router.post("/posts",(req,res)=>{

})

router.get("/posts",(req,res)=>{
    console.log(Campaign);
})