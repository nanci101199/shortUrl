const express = require('express')
const  { connectToMongoDb} = require('./connect')
const app = express()
const PORT = 8001
const urlShortner = require('./routes/url')

connectToMongoDb('mongodb://localhost:27017/shortUrl').then(() => {
    console.log("connect to mongodb")
})

app.use(express.json())

app.listen(PORT ,  () => {
    console.log(`Url Shortner Server Started : ${PORT}`);
})

app.use('/url',urlShortner)