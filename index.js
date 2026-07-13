const express = require('express')
const app = express()
const path = require('path')
const URL = require('./models/url')
const urlShortner = require('./routes/url')
const UrlStaticRoute = require('./routes/staticRouter')
const UsersRoute = require('./routes/user')
const PORT = 8001
const cookieParse = require('cookie-parser')
const  { connectToMongoDb} = require('./connect')
const { checkforAuthentication, restrictTo } = require('./middlewares/auth')

connectToMongoDb('mongodb://localhost:27017/shortUrl').then(() => {
    console.log("connect to mongodb")
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParse())
app.use(checkforAuthentication)

app.set("view engine", 'ejs')
app.set("views", path.resolve('./views'))

app.listen(PORT ,  () => {
    console.log(`Url Shortner Server Started : ${PORT}`);
})


app.get('/welcome', async(req, res) => {
    return res.render('welcome')
})

app.use('/' , UrlStaticRoute)
app.use('/url', restrictTo(['Normal', "Admin"]) , urlShortner)
app.use('/user', UsersRoute)

app.use((req, res) => {
    return res.redirect('login');
});