const mongoose = require("mongoose");
const paymentScema = new mongoose.Schema({
   
    datetime:{
        type:Date,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    flatno:{
        type:String,

    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    note:{
        type:String,
    }

})

const Paymetdetails = new mongoose.model("PAYMENTDETAILS",paymentScema);
module.exports = Paymetdetails