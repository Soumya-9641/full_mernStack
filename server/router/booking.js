const express = require("express");
require("../db/connect")
const Pickup = require("../models/pickup")
const router = express.Router()

const authenticate = require("../middlewares/authenticate");


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

module.exports= booking;