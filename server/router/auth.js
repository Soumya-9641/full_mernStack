const express = require("express");
require("../db/connect")
const User = require("../models/user")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")


router.get("/",(req,res)=>{
    console.log("Call the middlewares")
    res.send("Hello World from router")
})
//using promises
// router.post("/register",(req,res)=>{
//     const {name,email,phone,work,password,cpassword}= req.body
//     if(!name || !email || !phone || !work||!password||!cpassword){
//         return res.status(200).json({error:"plz filled the field properly"})
//     }
//     User.findOne({email:email})
//     .then((userexist)=>{
//         if(userexist){
//             return res.status(200).json({error:"email already exist"})
//         }
//         const user = new User({name,email,phone,work,password,cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }).catch((err)=>{
//         console.log(err)
//     })

    
//     console.log(req.body)
//     res.json({message: req.body})
// })

//using async await
router.post("/register", async (req,res)=>{
    const {name,email,phone,work,password,cpassword}= req.body
         if(!name || !email || !phone || !work||!password||!cpassword){
             return res.status(403).json({error:"plz filled the field properly"})
        }
        try{
           const userexist= await User.findOne({email:email})
           if(userexist){
            return res.status(422).json({error:"email already exist"})
           }else if(password!=cpassword){
            return res.status(402).json({error:"password are not matching"})
           }else{
            const user = new User({name,email,phone,work,password,cpassword})
            await user.save()
            res.status(201).json({message:"user registered successfully"})
           }
    
        
        }catch(err){
            console.log(err)
        }
})

//login
router.post("/login", async (req,res)=>{
    // console.log(req.body)
    // res.json({message:"awesome"})
    try{
        let token;
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({error:"plz filled the data"})
        }
        const userLogin = await User.findOne({email:email})
    

        
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)
            console.log(userLogin)
             token = await userLogin.generateAuthToken();
            console.log(token)
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now() + 12323000000),
                httpOnly:true
            });
        if(!isMatch){
            res.status(402).json({error:"Invalid credentials part 1"})
            
        }else{
            res.status(200).json({message:"user sign in successfully"})

        }
        }else{
            res.status(402).json({error:"Invalid credentials part 2"})
        }
        

    }catch(err){
        console.log(err)
    }
})
    

    
  

module.exports = router