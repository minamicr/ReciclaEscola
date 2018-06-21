import React from 'react'
import IconButton from '../template/iconButton'
{/*import Grid from '../template/grid' 
import IconButton from '../template/iconButton' */}

export default props => (
    
    <div className='escolaForm'>
        <form action="" className="container-fluid">

            <div className="hidden">
                <input type="hidden"
                    id="id"
                    onChange={props.handleChange}
                    value={props.id} />
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label for="nome">Nome</label>
                    
                            <input type="text" 
                                id="nome" 
                                className="form-control"
                                placeholder="informe o nome da escola"
                                onChange={props.handleChange}
                                value={props.nome} />
                </div>
                <div className="form-group col-md-1">
                    <label>Pesquisar</label>
                    <IconButton className='col-1' 
                        style='info' icon='search'
                        onClick={props.handleSearch}>
                    </IconButton>
                </div>
                <div className="form-group col-md-6">              
                    <label for="endereco">Endereço</label>
                    <input type="text" 
                        id="endereco" 
                        placeholder="informe o endereço da escola"
                        className="form-control" 
                        onChange={props.handleChange}
                        value={props.endereco} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="cidade">Cidade</label>
                    <input type="text" className="form-control" 
                        id="cidade" 
                        placeholder="informe a cidade da escola"
                        onChange={props.handleChange}
                        value={props.cidade} />
                </div>
                <div className="form-group col-md-4">
                    <label for="estado">Estado</label>
                        <input type="text" className="form-control"
                            id="estado"
                            placeholder="informe o estado da escola"
                            onChange={props.handleChange}
                            value={props.estado} />
                </div>
                <div className="form-group col-md-2">
                    <label for="cep">CEP</label>
                    <input type="text" className="form-control" 
                        id="cep" 
                        placeholder="informe o cep da escola"
                        onChange={props.handleChange}
                        value={props.cep} />
                </div>
            </div>        
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="telefone">Telefone</label>
                    <input type="text" className="form-control" 
                        id="telefone" 
                        placeholder="informe o telefone da escola"
                        onChange={props.handleChange}
                        value={props.telefone} />
                </div>
                <div className="form-group col-md-6">
                    <label for="email">E-mail</label>
                    <input type="email" className="form-control" 
                        id="email" 
                        placeholder="informe o e-mail da escola"
                        onChange={props.handleChange}
                        value={props.email} />
                </div>

            </div>  
            <div className="form-row">
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary" 
                        onClick={props.handleAddUpdate}>Incluir</button>
                    <button type="reset" className="btn btn-secondary"
                        onClick={props.handleCleanFields}>Cancelar</button>
                </div>
            </div>
        </form>   

    </div>
)