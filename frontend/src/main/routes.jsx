import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Escola from '../escola/escola'
import Sobre from '../sobre/sobre'

export default props => (
    <Router history = {hashHistory}>
        <Route path='/escola' component={Escola} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/escola' />
    </Router>
)