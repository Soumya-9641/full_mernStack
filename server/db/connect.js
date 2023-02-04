const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const DB="mongodb+srv://soumya-9641:soumya@cluster0.y7qxfvq.mongodb.net/mern?retryWrites=true&w=majority" 



mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successfull`)
}).catch((err)=>{
    console.log("no connection")
})
//process.env.DATABASE
//mongodb+srv://soumya-9641:soumya@cluster0.y7qxfvq.mongodb.net/mern?retryWrites=true&w=majority