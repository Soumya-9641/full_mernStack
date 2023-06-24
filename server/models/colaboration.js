const mongoose = require("mongoose");

const colaborationSchema = new mongoose.Schema({
    
    name:{
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
    type:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

const employee = new mongoose.model("EMPLOYEEENGAGEMENT",colaborationSchema);
module.exports = employee