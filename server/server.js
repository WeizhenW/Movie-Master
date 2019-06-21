const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', (req, res) => {
    pool.query(`SELECT * FROM "movies";`).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all movies', error);
        }
    )
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});