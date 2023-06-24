const mongoose = require("mongoose");
const pickupSchema = new mongoose.Schema({
    location:{
        type: String,
        required:true
    },
    pickuptype:{
        type:String,
        required:true
    }
})

const Pickup = new mongoose.model("PICKUP",pickupSchema)

module.exports= Pickup;