const express = require("express");
const cookieParser = require('cookie-parser')
const app = express()
const shortid = require("shortid")
const Razorpay = require("razorpay") ;
const multer = require("multer")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
//const cors = require('cors');

dotenv.config({path:"./config.env"})
require("./db/connect")
const User = require("./models/user")
const PORT = process.env.PORT;
//app.use(cors());
//link the router part
// app.use(multer({
//     dest: './router/auth.js'
//   }));

app.use(cookieParser())
app.use(express.json())
app.use(require('./router/auth'));


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
  app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	
	const currency = 'INR'

	const options = {
		amount: req.body.paymentval*100,
		currency,
		receipt: req.body.oid,
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

app.get("/",(req,res)=>{
    console.log("Call the middlewares")
    res.send("Hello World")
})

app.listen(PORT , (req,res)=>{
    console.log(`app is running on port ${PORT}`)
})
