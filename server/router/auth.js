const express = require("express");
require("../db/connect")
const User = require("../models/user")
const shortid = require("shortid")
const Paymetdetails = require("../models/paymentdetails")
const Personalquery = require("../models/personalquery")
const Corporatequery= require("../models/corporate")
const Corporatequeryschema = require("../models/corporatequery")
const employee = require("../models/colaboration");
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwtoken =  require("jsonwebtoken")
const authenticate = require("../middlewares/authenticate");
const Razorpay = require("razorpay") ;
const Pickup = require("../models/pickup")
const service = require("../service.json")


// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_SECRET_KEY,
//   });
//   router.post('/razorpay', async (req, res) => {
// 	const payment_capture = 1
// 	const amount = 499
// 	const currency = 'INR'

// 	const options = {
// 		amount: amount * 100,
// 		currency,
// 		receipt: shortid.generate(),
// 		payment_capture
// 	}

// 	try {
// 		const response = await razorpay.orders.create(options)
// 		console.log(response)
// 		res.json({
// 			id: response.id,
// 			currency: response.currency,
// 			amount: response.amount
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

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
router.post("/payment",async(req,res)=>{
            const{date, timeslot,name,email,flatno, city,pincode,address, note} =req.body;
            const datetime= new Date(`${date}T${timeslot}`);
            if(!timeslot  || !name ||!email||!city||!flatno||!pincode||!address){
                return res.status(403).json({error:"plz filled the field properly"})
            }
            try{
                    const paymentdetails =  new Paymetdetails({datetime,name,email,flatno, city,pincode,address, note})
                    await paymentdetails.save();
                    res.status(201).json(paymentdetails)
                    

            }catch(err){
                console.log(err);
            }
})

router.post("/employee",async(req,res)=>{
        try{

            const {name,email,contact,type,message} = req.body;
            if(!name||!email||!contact||!type||!message){
                return res.status(400).json({erro:"Plz fill the data"})
            }
            const personalquery = new employee({name,email,contact,type,message});
            await personalquery.save();
            res.status(201).json(personalquery)

        }catch(err){
            console.log(err);
        }
})
router.post("/personalquery",async(req,res)=>{
    try{

        const {name,email,contact,query,subject,message} = req.body;
        if(!name||!email||!contact||!message||!query||!subject){
            return res.status(400).json({erro:"Plz fill the data"})
        }
        const employeEngagement = new Personalquery({name,email,contact,query,subject,message});
        await employeEngagement.save();
        res.status(201).json(employeEngagement)

    }catch(err){
        console.log(err);
    }
})
router.post("/corporate",async(req,res)=>{
    try{

        const {societyname,orgname,email,contact,query,subject,donorsno,items,details} = req.body;
        if(!societyname||!orgname||!email||!contact||!query||!donorsno||!items||!details||!subject){
            return res.status(400).json({erro:"Plz fill the data"})
        }
        const corporatequery = new Corporatequery({societyname,orgname,email,contact,query,items,subject,donorsno,details});
        await corporatequery.save();
        res.status(201).json(corporatequery)

    }catch(err){
        console.log(err);
    }
})
router.post("/corporatequery",async(req,res)=>{
    try{

        const {name,email,company,contact,query,subject,message} = req.body;
        if(!name||!email||!contact||!query||!company||!message||!subject){
            return res.status(400).json({erro:"Plz fill the data"})
        }
        const corporatequeryschema = new Corporatequeryschema({name,email,company,contact,query,subject,message});
        await corporatequeryschema.save();
        res.status(201).json(corporatequeryschema)

    }catch(err){
        console.log(err);
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
    
router.get("/about",authenticate,(req,res)=>{
    console.log("Hello my about")
    res.send(req.rootUser);
})

router.get("/getdata",authenticate,(req,res)=>{
    console.log("Hello my contact")
    res.send(req.rootUser);
})
router.post("/contact",authenticate,async (req,res)=>{
    try{
        const {name,email,phone,message} = req.body;
        if(!name || !email|| !phone|| !message){
            console.log("PLZ fill all the data");
            return res.json({error: "plz fill the data"});

        }
        const usercontact = await User.findOne({_id:req.userID });
        if(usercontact){
            const contactMessage = await usercontact.addMessage(name,email,phone,message);
            await usercontact.save();
            res.status(201).json({message:"user contact successfully"})
        }

    }catch(err){
        console.log(err);
    }
})

router.get("/logout",(req,res)=>{
    console.log("Hello my login page")
    res.clearCookie("jwtoken",{path:"/"})
    res.status(200).send("Logout page called");
})

  
router.post("/bookinglocation", async (req,res)=>{
    const {location,pickuptype}= req.body
         if(!location || !pickuptype){
             return res.status(403).json({error:"plz filled the field properly"})
        }
        try{
           
            const pickup = new Pickup({location,pickuptype})
            await pickup.save()
            res.status(201).json({message:"pickup  registered successfully"})
           
        
        }catch(err){
            console.log(err)
        }
})
router.get("/pincode",async (req,res)=>{
    try{
        res.status(200).json(service);
        console.log(service)
    }catch(err){
        console.log(err);
    }
})




module.exports = router