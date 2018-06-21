import React from 'react'

export default props => (
    <div className="negocioForm">
        <form action="" className="container-fluid">
            <div className="form-row">
                <div className="form-group col-12">
                    <label for="descricao">Descrição</label>
                    <input type="text" 
                        id="descricao"
                        placeholder="informe a descrição do negócio" 
                        className="form-control"
                        onChange={props.handleChange}
                        value={props.descricao} />
                </div>        
            </div>
            <div className="form-row">
                <div className="col-12">
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleAdd}>Incluir
                    </button>
                    <button type="reset" 
                        className="btn btn-secondary">Cancelar
                    </button>
                </div>
            </div>
        </form>
    </div>
)