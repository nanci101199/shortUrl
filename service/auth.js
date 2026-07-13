// const sessionIdToUserMap = new Map()

// const setUser = (id, user) => {
//     sessionIdToUserMap.set(id, user)
// }


// const getUser = (id) => {
//     return sessionIdToUserMap.get(id)
// }

// module.exports = {
//     getUser , setUser
// }


// above code is a statefull token  and below one is stateless token

const jwt = require('jsonwebtoken')
const secretKey = "nanciPersonalSecret"

const setUser = (user) => {
    console.log(user);
  return jwt.sign({
        _id:user?._id,
        email:user?.email,
        role:user.role
    }, secretKey)
}


const getUser = (token) => {
    if(!token) return null
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null
    }
    
}

module.exports = {
    getUser , setUser
}