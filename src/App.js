import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default class App extends Component{
  render(){
    return(
      <div>
        <GlobalStyle />
        <Header />
        <Main nome="David" idade="28" estudar="Programação"/>
        <Footer />
      </div>
    )
  }
}