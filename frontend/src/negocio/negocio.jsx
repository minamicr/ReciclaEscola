import React, {Component} from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import NegocioForm from './NegocioForm'
import NegocioLista from './negocioLista';

const URL = 'http://localhost:3003/api/negocio'

export default class Negocio extends Component {

    constructor(props) {
        super(props)
        this.state = { descricao: '', list:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}`)
        .then(resp => this.setState({...this.state
            , descricao: '', list: resp.data }))
    }

    handleAdd() {
        const descricao = this.state.descricao
        axios.post(URL, {descricao})
            .then(resp => this.refresh())
    }

    handleChange(e) {
        let change = { [e.target.id]: e.target.value}
        this.setState(change)
    }

    handleRemove(negocio){
        axios.delete(`${URL}/${negocio._id}`)
            .then(resp => this.refresh())
    }

    render () {
        return (
            <div>
                <PageHeader name='Negócios' small='cadastro' />
                <NegocioForm 
                    descricao = {this.state.descricao}
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}/>
                <NegocioLista list={this.state.list}
                    handleRemove={this.handleRemove}
                />
                
            </div>
        )
    }
}