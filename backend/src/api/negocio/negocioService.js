const Negocio = require('./negocio')

Negocio.methods(['get', 'post', 'put', 'delete'])
Negocio.updateOptions( {new: true, runValidators: true})

module.exports = Negocio