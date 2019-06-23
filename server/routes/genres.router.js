const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//route to add new genre to db
router.post('/new', (req, res) => {
    pool.query(`INSERT INTO "genres" ("name")
    VALUES ($1);`, [req.body.genre]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with add new genre to db', error);
            res.sendStatus(500);
        }
    )
})

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
            res.sendStatus(500);
        }
    )
})

//route to get all genres from db
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "genres" ORDER BY "name";`).then(
        result => {
            res.send(result.rows);
        }
    ).catch(
        error => {
            console.log('error with get all genres', error);
            res.sendStatus(500);
        }
    )
})

//route to add one genre to one movie
router.post('/:movieid', (req, res) => {
    pool.query(`INSERT INTO "movie_genre" ("movie_id", "genre_id")
        VALUES($1, $2);`,
    [req.params.movieid, req.body.genreId]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with add one genre to one movie', error);
            res.sendStatus(500);
        }
    )
})

//route to delete one genre from db table
router.delete('/delete/:genreid', (req, res) => {
    pool.query(`DELETE FROM "movie_genre" WHERE "genre_id"=$1;`,[req.params.genreid]);
    pool.query(`DELETE FROM "genres" WHERE "id"=$1;`, [req.params.genreid])
    .then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with delete one genre from db', error);
            res.sendStatus(500);
        }
    )
})

//route to delete one genre from one movie
//delete request doesn't accept req.body...
router.delete('/:movieid/:genreid', (req, res) => {
    pool.query(`DELETE FROM "movie_genre" WHERE "movie_id"=$1 AND "genre_id"=$2;`,
    [req.params.movieid, req.params.genreid]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with delete one genre from one movie', error);
            res.sendStatus(500);
        }
    )
})

module.exports =router;