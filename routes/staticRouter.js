const express = require('express')
const router = express.Router()
const URL = require('../models/url')

router.get('/', async(req, res) => {
    const allUrl = await URL.find({})
    return res.render('home', {
        url: allUrl
    })
})

router.get('/shortner', async(req, res) => {
    const allUrl = await URL.find({})
    const shortId = "abc123"; // Generated ID
    return res.render('shortner', {
        url: allUrl,
        id:shortId
    })
})

module.exports = router