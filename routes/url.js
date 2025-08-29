const express = require('express');
const router = express.Router();

// importing database
const {URL} = require('../model/index');

// importing url shortner
const {nanoid} = require('nanoid')

router.post('/short', async function(req, res){

    const body = req.body;
    if(!body.url){
        res.status(400).json({
            error: "url required"
        })
    }

    try{
        const shortid = nanoid(8); // means short url will be of 8 words
        await URL.create({
            shortid: shortid,
            originalUrl: body.url,
            visitHistory: []
        })

        res.json({
            url: shortid
        })

    } catch(error){
        res.status(500).json({
            error: `Error in generating url: ${error}`
        })
    }
})

module.exports = router;
