const express = require("express");
const app = express()
const port = 8000;
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port , (req,res)=>{
    console.log(`app is running on port ${port}`)
})