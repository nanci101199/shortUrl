const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
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
   
}, {
    timestamps : true
})

const USER = mongoose.model("user",urlSchema)

module.exports = USER