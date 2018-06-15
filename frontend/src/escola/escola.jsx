import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import EscolaForm from './escolaForm'
import EscolaLista from './escolaLista'

const URL = 'http://localhost:3003/api/escola'

export default class Escola extends Component {

    
    constructor(props) {
        super(props)
        this.state = { nome: '', endereco: '', cidade: ''
                , estado: ''
                , cep: '', telefone: '', email: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, nome: '', list: resp.data}))
    }

    handleAdd() {
        const nome = this.state.nome
        const endereco = this.state.endereco
        const cidade = this.state.cidade
        const estado = this.state.estado
        const cep = this.state.cep
        const telefone = this.state.telefone
        const email = this.state.email

        axios.post(URL, { nome, endereco, cidade, estado, cep
                            , telefone, email })
            .then(resp => this.refresh())
    }

    handleChange(e) {
        let change = { [e.target.id]: e.target.value }
        this.setState(change)
    }

    render () {
        return (
            <div>
                <PageHeader name='Escolas' small='Cadastro' />
                <EscolaForm nome={this.state.nome}
                    endereco={this.state.endereco}
                    cidade={this.state.cidade}
                    estado={this.state.estado}
                    cep={this.state.cep}
                    telefone={this.state.telefone}
                    email={this.state.email}
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange} />
                <EscolaLista />

            </div>
        )
    }
}