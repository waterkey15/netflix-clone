import React from 'react'
import styled from 'styled-components'
import Greeting from './Greeting'
import Enjoy from './Enjoy'

function Home() {
    return (
        <Container> 
            <Greeting/>
            <Seperator/>
            <Enjoy/>
            
        </Container>
    )
}

const Seperator = styled.div`
    background-color: #222;
    min-height: 20px;
`

const Container = styled.div`
    background-color: none;
`


export default Home
