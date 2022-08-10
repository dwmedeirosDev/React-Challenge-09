import React, { Component } from 'react'
import styled from 'styled-components'

const Valores = styled.div`
    width: 500px;
    margin: 50px auto;
    text-align: center;
`

export default class Main extends Component{
    render(){
        return(
            <Valores>
                <h2>Nome: {this.props.nome}</h2>
                <h2>Idade: {this.props.idade}</h2>
                <h2>O que quer estudar: {this.props.estudar}</h2>
            </Valores>
        )
    }
}