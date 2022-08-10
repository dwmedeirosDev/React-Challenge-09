import React, { Component } from 'react'
import styled from 'styled-components'
import noodle from './images/noodle.png'

const ConteinerFood = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        padding: 30px;
    }

    img{
        width: 300px;
    }
`

export default class Header extends Component{
    render(){
        return(
            <ConteinerFood>
                <h1>Minha comida favorita é:</h1>
                <figure>
                    <img src={noodle} />
                </figure>
            </ConteinerFood>
        )
    }
}