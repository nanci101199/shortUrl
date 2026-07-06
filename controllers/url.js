const { nanoid } = require('nanoid')
const URL = require('../models/url')

const handleGenerateNewShortUrl = async(req, res) => {
    const body = req.body
    console.log(req, body);
    if(!body) return res.status(400).json({error :"redirectUrl URL Is required"})
    const shortId = nanoid(8)
const data = {
    shortId:shortId,
    redirectUrl: body.url,
    visitHistory: []
}
    await URL.create(data)
    return res.render('shortner', {
        data
    })
    // return res.status(201).json({message :"Created sussceful", body:data})
}

const handleGetTheOriginalUrl =  async(req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({shortId}, {
        $push : {
            visitHistory : {
                timestamp : Date.now()
            }
        }
    })

     res.redirect(entry.redirectUrl)

}

const handlegetAnalytics = async(req, res) => {
    const shortId = req.params.shortId
   const result = await URL.findOne({shortId})
    return res.status(200).json({
        total_click : result.visitHistory.length,
        analytics : result.visitHistory
    })
}
module.exports = {handleGenerateNewShortUrl , handleGetTheOriginalUrl, handlegetAnalytics}