const mongoose = require("mongoose");

const corporatequerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    company:{
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
    
    
    message:{
        type:String,
        required:true
    },
})

const Corporatequeryschema = new mongoose.model("CORPORATEQUERYSCHEMA",corporatequerySchema);
module.exports =Corporatequeryschema