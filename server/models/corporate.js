const mongoose = require("mongoose");

const corporateSchema = new mongoose.Schema({
    societyname:{
        type:String,
        required:true
    },
    orgname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    query:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    donorsno:{
        type:Number,
        required:true
    },
    items:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
})
const Corporatequery = new mongoose.model("CORPORATEQUERY",corporateSchema);
module.exports= Corporatequery


//societyname,orgname,email,contact,query,subject,donorsno,items,details