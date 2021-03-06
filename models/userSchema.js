  const mongoose = require("mongoose")

const userSchema =  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        unique: true
    },
    isAdmin: {
        type:Boolean,
        default:false,
    },
    });


const User = mongoose.model("User", userSchema);
module.exports=User;