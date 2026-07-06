const express = require('express')
const  { connectToMongoDb} = require('./connect')
const app = express()
const PORT = 8001
const path = require('path')
const URL = require('./models/url')
const ejs = require('ejs')
const urlShortner = require('./routes/url')
const UrlStaticRoute = require('./routes/staticRouter')

connectToMongoDb('mongodb://localhost:27017/shortUrl').then(() => {
    console.log("connect to mongodb")
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine", 'ejs')
app.set("views", path.resolve('./views'))
app.get('/urlTest', async(req, res) => {
    const allUrl = await URL.find({})
    return res.render('home', {
        url: allUrl
    })
})
app.listen(PORT ,  () => {
    console.log(`Url Shortner Server Started : ${PORT}`);
})

app.use('/api/url',urlShortner)
app.use('/',UrlStaticRoute)