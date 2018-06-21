const restful = require('node-restful')
const mongoose = restful.mongoose

const negocioSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    incluidoEm: { type: Date, default: Date.now },
    incluidoPor: { type: String, required: false },
    alteradoEm: { type: Date, required: false},
    alteradoPor: { type: String, required: false}
})

module.exports = restful.model('Negocio', negocioSchema)