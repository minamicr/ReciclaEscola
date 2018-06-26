import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import IconButton from '../template/iconButton'

export default class Teste extends Component {
    render() {
        return (
       
          <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" 
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              
              </div>
            </nav>
          
            <form>
              <div className="form-group row pb-2">
                <label for="nome" className="col-1 col-form-label">Nome</label>
                <div className="col-4">
                    <input type="text" 
                                id="nome" 
                                className="form-control"
                                placeholder="informe o nome da escola"/>
                </div>

                <div className="col-1">
                        <IconButton 
                            style='info' icon='search'
                            className="form-control" >
                        </IconButton>
                </div>
                <label for="endereco" className="col-1 col-form-label">Endereço</label>
                <div className="col-5">              
                        <input type="text" 
                            id="endereco" 
                            placeholder="informe o endereço da escola"
                            className="form-control"/>
                </div>
              </div>
            </form>
          </div>
        )
    }
}