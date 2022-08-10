import React, { Component } from 'react'
import styled from 'styled-components'

const ConteinerFooter = styled.div`
    width: 500px;
    margin: 0 auto;
    text-align: center;
`

export default class Footer extends Component{
    render(){
        return(
            <ConteinerFooter>
                <h1>Footer</h1>
            </ConteinerFooter>
        )
    }
}