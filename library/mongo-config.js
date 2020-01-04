var mongodb = require('mongoose')
var dbUrl = 'mongodb://localhost:27017/code-clinic-mongo'
var settings = { useNewUrlParser: true, useUnifiedTopology: true };
mongodb.connect(dbUrl, settings, (err) => { if (err) console.log('error occured', err) })
exports.db = mongodb