const express = require('express')
const router = express.Router()
const URL = require('../models/url')
const { restrictTo } = require('../middlewares/auth')


router.get('/admin', restrictTo(['Admin']),  async(req, res) => {
    const allUrl = await URL.find({ })
    return res.render('home', {
        url: allUrl
    })
})

router.get('/', restrictTo(['Normal', "Admin"]),  async(req, res) => {
    const allUrl = await URL.find({ createdBy : req.user._id})
    return res.render('home', {
        url: allUrl
    })
})

router.get('/shortner',restrictTo(['Normal', "Admin"]), async(req, res) => {
    const allUrl = await URL.find({ createdBy : req.user._id})
    return res.render('shortner', {
        url: allUrl,
    })
})

router.get('/signup', (req, res) => {
    return res.render('signup')
})
router.get('/login', (req, res) => {
    return res.render('login')
})



module.exports = router