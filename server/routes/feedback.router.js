const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedbak');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET error', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log("POST /feedback");
    queryText='INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1,$2,$3,$4);'
    queryArguments=[req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryText, queryArguments)
    .then(()=>{
        console.log("POST success", req.body);
        res.sendStatus(200)
    })
    .catch((error)=>{
        console.log("POST error",error);
    res.sendStatus(500);        
    })
    
})

module.exports = router;