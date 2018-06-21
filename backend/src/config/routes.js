const express = require('express')

module.exports = function(server) {
    //API routes
    const router = express.Router()
    server.use('/api', router)

    //Escola routes
    const escolaService = require('../api/escola/escolaService')
    escolaService.register(router, '/escola')

    //Negocio routes
    const negocioService = require('../api/negocio/negocioService')
    negocioService.register(router, '/negocio')
}