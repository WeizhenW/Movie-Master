const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'http://www.omdbapi.com/',
        params: {
            t: req.query.title,
            apikey: process.env.omdbapi,
        }
    }).then(
        response => {
            res.send(response.data);
        }
    ).catch(
        error => {
            console.log('error with api get', error);
            res.sendStatus(500);
        }

    )
})

module.exports = router;