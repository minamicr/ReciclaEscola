import React from 'react'
import IconButton from '../template/iconButton'
{/*import Grid from '../template/grid' 
import IconButton from '../template/iconButton' */}

export default props => (
    
    <div className='escolaForm'>

         <form>

            <div className="form-row hidden">
                <input type="hidden"
                    id="id"
                    onChange={props.handleChange}
                    value={props.id} />
            </div>

            <div className="form-group row pb-2">
                <label for="nome" className="col-1 col-form-label">Nome</label>
                <div className="col-5 input-group">
                    <input type="text" 
                                id="nome" 
                                className="form-control"
                                onChange={props.handleChange}
                                value={props.nome} />
                    <div className="input-group-append">
                        <IconButton 
                            style='info' icon='search'
                            className="form-control" >
                        </IconButton>
                    </div>


                </div>

                <label for="endereco" className="col-1 col-form-label">Endereço</label>
                <div className="col-5">              
                        <input type="text" 
                            id="endereco" 
                            className="form-control"
                            onChange={props.handleChange}
                            value={props.endereco} />
                </div>
            </div>
            
            <div className="form-group row pb-2">
                <label for="cidade" className="col-1 col-form-label">Cidade</label>
                <div className="col-5">
                        <input type="text" 
                            className="form-control" 
                            id="cidade" 
                            onChange={props.handleChange}
                            value={props.cidade} />
                </div>
                <label for="estado" className="col-1 col-form-label">Estado</label>
                <div className="col-2">
                        <input type="text" className="form-control"
                            id="estado"
                            onChange={props.handleChange}
                            value={props.estado} />
                </div>
                <label for="cep" className="col-1 col-form-label">CEP</label>
                <div className="col-2">
                        <input type="text" className="form-control" 
                            id="cep" 
                            onChange={props.handleChange}
                            value={props.cep} />
                </div>
            </div>        
            
            <div className="form-group row pb-2">
                <label for="telefone" className="col-1 col-form-label">Telefone</label>
                <div className="col-5">
                        <input type="text" className="form-control" 
                            id="telefone" 
                            onChange={props.handleChange}
                            value={props.telefone} />
                </div>
                <label for="email" className="col-1 col-form-label">E-mail</label>
                <div className="col-5">
                        <input type="email" className="form-control" 
                            id="email" 
                            onChange={props.handleChange}
                            value={props.email} />
                </div>

            </div>  
            
            <div className="form-row">
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary" 
                        onClick={props.handleAddUpdate}>Incluir</button>
                    <button type="reset" className="btn btn-secondary ml-2"
                        onClick={props.handleCleanFields}>Cancelar</button>
                </div>
            </div>

        </form>   
        
    </div>
)