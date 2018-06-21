import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(escola => (
            <tr key={escola._id} >
                <td>{escola.nome}</td>
                <td>{escola.telefone}</td>
                <td>{escola.email}</td>
                <td>
                    <IconButton style='info' icon='edit'
                        onClick={() => props.handleEdit(escola)}>
                    </IconButton>
                </td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(escola)}>
                    </IconButton>

                </td>                
            </tr>
        ))
    }

    return (
        <table className="tabela">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}
    