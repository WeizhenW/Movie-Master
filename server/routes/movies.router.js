const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//route to get all genres per movie
router.get('/allgenres', (req, res) => {
    pool.query(`SELECT "movies"."title", array_agg("genres"."name") AS "genres"
    FROM "movies"
    JOIN "movie_genre" ON  "movies"."id"="movie_genre"."movie_id"
    JOIN "genres" ON "genres"."id"="movie_genre"."genre_id"
    GROUP BY "movies"."title";`).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all genres per movie', error);
            res.sendStatus(500);
        }
    )
})

//route to get all movies
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "movies" ORDER BY "id";`).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all movies', error);
            res.sendStatus(500);
        }
    )
})
//route to get one movie
router.get('/:id', (req, res) => {
    pool.query(`SELECT * FROM "movies" WHERE "id"=$1`,
    [req.params.id]).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all movies', error);
            res.sendStatus(500);
        }
    )
})

//route to update one movie
router.put('/', (req, res) => {
    const movieObj = req.body;
    pool.query(`UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`,
    [movieObj.title, movieObj.description, movieObj.id]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with update one movie', error);
            res.sendStatus(500);
        }
    )
})



module.exports =router;