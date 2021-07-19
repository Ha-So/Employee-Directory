import React, { Component } from 'react'
import styled from 'styled-components'

import sslogo from '../style/logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',

})``

class Logo extends Component{
    render() {
        return (
            <Wrapper href='https://google.com'>
                <img src={sslogo} width="50" height ="50" alt="https://google.com"/>
            </Wrapper>
        )
    }
}

export default Logo