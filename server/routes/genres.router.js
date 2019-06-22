const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//route to get genres for one movie
router.get('/:id', (req, res) => {
    pool.query(`SELECT * FROM "movies" 
    JOIN "movie_genre" ON "movies"."id" = "movie_genre"."movie_id"
    JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
    WHERE "movies"."id" = $1;`, [req.params.id]).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get genres for one movie', error);
        }
    )
})

module.exports =router;