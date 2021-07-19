import React, { Component } from 'react'
import styled from 'styled-components'
import '../style/style.css'

import Logo from './Logo'
import Links from './Links'
/*
const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`*/


const Container = styled.div.attrs({
    className: 'container',
    
})`
margin: auto;
margin-top: -10px;
margin-bottom: -20px;
width: 100%;

transition: padding 300ms ease-in-out;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;`

const Nav = styled.nav.attrs({
className: 'navbar navbar-expand-lg navbar-light bg-white' ,
  
    
})`
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar