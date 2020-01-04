var api = require('./server.js').api
var db = require('../library/mongo-config.js').db
var population = require('../model/population-collection.js').population

var schema = new db.Schema(population);
var Popultation = db.model('pop', schema, 'population');


api.get('/title', (req, res) => {
    console.log('title is called ...')
    res.send("Node Learning")
})


api.get('/db/status', (req, res) => {
    if (db) res.sendStatus(200)
})


api.get('/population/:_id', (req, res) => {
    Popultation.findById(req.params._id).then(val => {
        res.send(val)
    })
})


api.post('/population', (req, res) => {
    population = req.body
    console.log(population)

    res.sendStatus(200)
})