import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(negocio => (
            <tr key={negocio._id} >
                <td>{negocio.descricao}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(negocio)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className="tabela">
            <thead>
                <tr>
                    <td>
                        Descrição
                    </td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}