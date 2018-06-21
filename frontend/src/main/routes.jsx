import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Escola from '../escola/escola'
import Sobre from '../sobre/sobre'
import Negocio from '../negocio/negocio'
import Teste from '../negocio/teste'

export default props => (
    <Router history = {hashHistory}>
        <Route path='/escola' component={Escola} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/negocio' component={Negocio} />
        <Route path='/teste' component={Teste} />
        <Redirect from='*' to='/escola' />
    </Router>
)