const mongoose = require("mongoose");
const donorregschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    adharno:{
        type:Number,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    }
})

const donoritem = mongoose.model("donor",donorregschema);
module.exports = donoritem

