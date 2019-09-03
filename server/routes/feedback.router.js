const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req,res) => {
    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;

    console.log(req.body);

    const data = req.body;

    pool.query(queryString, [data.feeling, data.understanding, data.supported, data.comments])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error in saving to database: ${err}`);
            res.sendStatus(500)
        })
});

router.get('/', (req,res) =>{
    const queryString = `SELECT * FROM "feedback";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Error in retrieving from database: ${err}`);
            res.sendStatus(500)
        })
})

module.exports = router;