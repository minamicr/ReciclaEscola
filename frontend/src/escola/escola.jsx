import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import EscolaForm from './escolaForm'
import EscolaLista from './escolaLista'

const URL = 'http://localhost:3003/api/escola'

export default class Escola extends Component {

    
    constructor(props) {
        super(props)
        this.state = { id: '', nome: '', endereco: '', cidade: ''
                , estado: ''
                , cep: '', telefone: '', email: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAddUpdate = this.handleAddUpdate.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleCleanFields = this.handleCleanFields.bind(this)

        this.refresh()
    }

    refresh(nome = '') {
        const search = nome ? `&nome__regex=/${nome}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state
                , nome, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.nome)
    }

    handleEdit(escola = '') {
        const search = escola ? `?_id=${escola._id}` : ''
        axios.get(`${URL}${search}`)
            .then(resp => this.setState({...this.state
                , id: escola._id
                , nome: escola.nome
                , endereco: escola.endereco
                , cidade: escola.cidade
                , estado: escola.estado
                , cep: escola.cep
                , telefone: escola.telefone
                , email: escola.email
                , list: resp.data}))

    }

    limparCampos() {
        console.log('limpar campos')
        this.setState({...this.state
           ,  nome: ''
            , endereco: ''
            , cidade: ''
            , estado: ''
            , cep: ''
            , telefone: ''
            , email: ''
            , list: []})
    }

    handleAddUpdate() {
        const id = this.state.id
        const nome = this.state.nome
        const endereco = this.state.endereco
        const cidade = this.state.cidade
        const estado = this.state.estado
        const cep = this.state.cep
        const telefone = this.state.telefone
        const email = this.state.email

        axios.put(`${URL}/${id}`, { nome, endereco, cidade, estado, cep
                , telefone, email })
                .then(resp => this.refresh())
                .then(this.limparCampos())

    }

    handleChange(e) {
        let change = { [e.target.id]: e.target.value }
        this.setState(change)
    }

    handleRemove(escola) {
        axios.delete(`${URL}/${escola._id}`)
            .then(resp => this.refresh())

    }

    handleCleanFields(){
        this.limparCampos()
    }

    render () {
        return (
            <div>
                <PageHeader name='Escolas' small='cadastro' />
                <EscolaForm 
                    id={this.state.id}
                    nome={this.state.nome}
                    endereco={this.state.endereco}
                    cidade={this.state.cidade}
                    estado={this.state.estado}
                    cep={this.state.cep}
                    telefone={this.state.telefone}
                    email={this.state.email}
                    handleAddUpdate={this.handleAddUpdate} 
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch}
                    handleCleanFields={this.limparCampos}
                     />
                <EscolaLista list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleEdit={this.handleEdit} 
                    />

            </div>
        )
    }
}