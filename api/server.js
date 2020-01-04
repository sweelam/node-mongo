var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
app.use(express.static('static'))
app.use(bodyParser.json())


var server = http.listen(3000, () => { console.log('Server started on port ', server.address().port) })
exports.api = app


