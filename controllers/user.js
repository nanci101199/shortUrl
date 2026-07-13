const USER = require("../models/user")
const {v4 :  uuidv4} = require('uuid')
const { setUser } = require("../service/auth")

const handleUserSignUp = async(req, res) => {
    const {email, name , password , role} = req.body
    await USER.create({
        email, name, password, role
    })
    return res.render('shortner')
}

const handleUserLogin = async(req, res) => {
    const { email , password} = req.body
    const AvailableUser = await USER.findOne({email, password})
    if(!AvailableUser) return res.render("signup", {
        error: "Username and password is incorrect"
    })
   const token =  setUser(AvailableUser)
   res.cookie("token", token)
    // return res.json({token})
    return res.redirect('/')
}


module.exports = { handleUserSignUp , handleUserLogin}