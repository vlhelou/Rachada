const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const RoutesApi = require('./api/routesApi');
const UsuarioApi = require('./api/Usuario');


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())
server.use('/api',RoutesApi)
//server.use('/api/usuario',UsuarioApi)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server