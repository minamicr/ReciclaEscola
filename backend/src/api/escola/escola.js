const restful = require('node-restful')
const mongoose = restful.mongoose

const escolaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: false },
    cidade: { type: String, required: false },
    estado: { type: String, required: false },
    cep: { type: String, required: false },
    telefone: { type: String, required: false },
    email: { type: String, required: false },
    incluidoEm: { type: Date, default: Date.now },
    incluidoPor: { type: String, required: false},
    alteradoEm: { type: Date, required: false},
    alteradoPor: { type: String, required: false}
})

module.exports = restful.model('Escola', escolaSchema)