const USER = require("../models/user")
const {v4 :  uuidv4} = require('uuid')
const { setUser } = require("../service/auth")

const handleUserSignUp = async(req, res) => {
    const {email, name , password} = req.body
    await USER.create({
        email, name, password
    })
    return res.render('shortner')
}

const handleUserLogin = async(req, res) => {
    const { email , password} = req.body
    const AvailableUser = await USER.findOne({email, password})
    if(!AvailableUser) return res.render("signup", {
        error: "Username and password is incorrect"
    })
   const sessionId = uuidv4()
   setUser(sessionId, AvailableUser)
   res.cookie("uid" ,sessionId )
    return res.render('shortner')
}


module.exports = { handleUserSignUp , handleUserLogin}