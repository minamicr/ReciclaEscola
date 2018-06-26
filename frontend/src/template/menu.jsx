import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand">
                <i className="fa fa-calendar-check-o"></i> #ReciclaEscola
            </a>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" 
                            role="button" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false">
                            Administração
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#/categoria">Categoria / SubCategoria</a>
                            <a className="dropdown-item" href="#/teste">Usuário</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#/negocio">Negócio</a>
                        </div>
                    </li>   
                    <li className="nav-item"><a className="nav-link" href="#/escola">Escolas</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/produtos">Produtos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/negocios">Meus Negócios</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/sobre">Sobre</a></li>
                </ul>
            </div>
    </nav>


)