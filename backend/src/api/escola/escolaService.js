const Escola = require('./escola')

Escola.methods(['get', 'post', 'put', 'delete'])
Escola.updateOptions( {new: true, runValidators: true })

module.exports = Escola