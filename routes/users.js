
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const queries = require('../queries/userQueries')

router.get("/", (request, response, next) => {
    queries.list().then(users => {
        response.json({users})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(users => {
        users
            ? response.json({users})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

router.post("/", (request, response, next) => {
    queries.create(request.body).then(users => {
        response.status(201).json({users})
    }).catch(next)
})

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true})
    }).catch(next)
})
router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(users => {
        response.json({users})
    }).catch(next)
})

module.exports = router 