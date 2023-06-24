const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

userSchema.pre("save",async function (next){
    console.log("Hi from the middlewares")
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }
    next()
})


userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},"mynameissoumyadipgantait")
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}

// userSchema.methods.addMessage = async function(name,email,phone,message){

//     try{
//         this.messages = this.messages.concat({name,email,phone,message});
//         await this.save();
//         return this.messages
//     }catch(err){
//         console.log(err);
//     }

// }
const User = new mongoose.model("USER",userSchema)

module.exports = User;