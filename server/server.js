const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended:true}));

/** ---------- ROUTES ---------- **/
//route to get all movies
app.get('/api/movies', (req, res) => {
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
//route to get one movie
app.get('/api/movies/:id', (req, res) => {
    pool.query(`SELECT * FROM "movies" WHERE "id"=$1`,
    [req.params.id]).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all movies', error);
        }
    )
})

//route to update one movie
app.put('/api/movies', (req, res) => {
    const movieObj = req.body;
    console.log(movieObj);
    pool.query(`UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`,
    [movieObj.title, movieObj.description, movieObj.id]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with update one movie', error);
        }
    )
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});