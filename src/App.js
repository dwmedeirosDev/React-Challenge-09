import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

export default class App extends Component{
  render(){
    return(
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    )
  }
}