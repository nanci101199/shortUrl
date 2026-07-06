const express = require('express')
const router = express.Router()

const { handleGenerateNewShortUrl, handleGetTheOriginalUrl, handlegetAnalytics }  = require('../controllers/url')

router.post('/', handleGenerateNewShortUrl)
router.get('/:shortId', handleGetTheOriginalUrl)
router.get('/analytics/:shortId', handlegetAnalytics)

module.exports = router