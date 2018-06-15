import React from 'react'
{/*import Grid from '../template/grid' 
import IconButton from '../template/iconButton' */}

export default props => (
    
    <div className='escolaForm'>
        <form action="" className="container-fluid">
            
            {/*
            <div className="form-row">
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'></IconButton>
                </Grid>
            </div>
            */}

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="nome">Nome</label>
                    <input type="text" 
                        id="nome" 
                        placeholder="informe o nome da escola"
                        className="form-control" 
                        onChange={props.handleChange}
                        value={props.nome} />
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
                        onChange={props.handleChange}
                        value={props.cidade} />
                </div>
                <div className="form-group col-md-4">
                    <label for="estado">Estado</label>
                        <input type="text" className="form-control"
                            id="estado"
                            onChange={props.handleChange}
                            value={props.estado} />
                </div>
                <div className="form-group col-md-2">
                    <label for="cep">CEP</label>
                    <input type="text" className="form-control" 
                        id="cep" 
                        onChange={props.handleChange}
                        value={props.cep} />
                </div>
            </div>        
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="telefone">Telefone</label>
                    <input type="text" className="form-control" 
                        id="telefone" 
                        onChange={props.handleChange}
                        value={props.telefone} />
                </div>
                <div className="form-group col-md-6">
                    <label for="email">E-mail</label>
                    <input type="email" className="form-control" 
                        id="email" 
                        onChange={props.handleChange}
                        value={props.email} />
                </div>

            </div>  
            <div className="form-row">
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary" 
                        onClick={props.handleAdd}>Incluir</button>
                    <button type="reset" className="btn btn-secondary">Cancelar</button>
                </div>
            </div>
        </form>   

    </div>
)