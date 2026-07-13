const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required :true,
        unique:true
    },
    password : {
        type:String,
        require : true
    },
   role :{
    type: String, 
    required : true,
    defaultn: "Normal" 
   }
}, {
    timestamps : true
})

const USER = mongoose.model("user",userSchema)

module.exports = USER