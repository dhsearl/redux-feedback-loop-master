const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => {
    console.log('DELETE /feedback');
    const queryText = `DELETE FROM "feedback" WHERE id=$1`
    pool.query(queryText, [req.params.id])
    .then(()=>{
        console.log("DELETE success", req.params.id);
        res.sendStatus(200);
    })
    .catch((error)=>{
        console.log("DELETE error", error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback" ORDER BY id DESC;')
        .then((result) => {
            console.log(('GET success'));
            res.send(result.rows);
        }).catch((error) => {
            console.log('GET error', error)
            res.sendStatus(500);
        });
})

router.post('/', (req, res) => {
    console.log("POST /feedback");
    const queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1,$2,$3,$4);'
    const queryArguments = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryText, queryArguments)
        .then(() => {
            console.log("POST success", req.body);
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log("POST error", error);
            res.sendStatus(500);
        })
})

router.put('/:id', (req,res)=>{
    console.log("PUT changing flagged status of ", req.params.id);
    const queryText = `UPDATE "feedback" SET flagged = NOT flagged WHERE id = $1`
    pool.query(queryText, [req.params.id])
    .then(()=>{
        console.log("PUT success", req.params.id)
        res.sendStatus(200);
    }) 
    .catch((error)=>{
        console.log("PUT error", error);
        res.sendStatus(500);
        
    })
})

module.exports = router;