const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs")
// const jwt =  require("jsonwebtoken")
const campaignSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    },
    subject:{
        type:Number,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    }
})






const Campaign = new mongoose.model("CAMPAIGN",campaignSchema)

module.exports = Campaign;