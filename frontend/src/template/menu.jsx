import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> #ReciclaEscola
                    
                </a>
            </div>
            <div id='navbar' className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/categoria">ADM - Categoria / SubCategoria</a></li>
                    <li><a href="#/escola">ADM - Escola</a></li>
                    <li><a href="#/escola">ADM - Usuário</a></li>
                    <li><a href="#/escola">ADM - Negócio</a></li>
                    <li><a href="#/escola">Produtos</a></li>
                    <li><a href="#/escola">Meus Negócios</a></li>
                    <li><a href="#/sobre">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>


)