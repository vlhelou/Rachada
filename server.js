const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./src/cors')
const queryParser = require('express-query-int')

const RoutesApi = require('./src/api/routesApi');


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())
server.use('/', express.static(__dirname + '/frontend/build'));
server.use('/api',RoutesApi)
console.log(__dirname)

//server.use('/api/usuario',UsuarioApi)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server