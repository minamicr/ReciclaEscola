import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand">
                <i className="fa fa-calendar-check-o"></i> #ReciclaEscola
            </a>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#/categoria">ADM - Categoria / SubCategoria</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/escola">ADM - Escola</a></li>
                    <li className="nav-item"><a className="nav-link"href="#/teste">ADM - Usuário</a></li>
                    <li className="nav-item"><a className="nav-link"href="#/negocio">ADM - Negócio</a></li>
                    <li className="nav-item"><a className="nav-link"href="#/escola">Produtos</a></li>
                    <li className="nav-item"><a className="nav-link"href="#/escola">Meus Negócios</a></li>
                    <li className="nav-item"><a className="nav-link"href="#/sobre">Sobre</a></li>
                </ul>
            </div>
    </nav>


)