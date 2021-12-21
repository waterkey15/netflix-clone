import React from 'react'
import styled from 'styled-components'
import Greeting from './Greeting'
import Enjoy from './Enjoy'
import Download from './Download'
import Watch from './Watch'
import CreateProfiles from './CreateProfiles'
import FAQ from './FAQ'
import Footer from './Footer'

function Home() {
    return (
        <Container> 
            <Greeting/>
            <Seperator/>
            <Enjoy/>
            <Seperator/>
            <Download/>
            <Seperator/>
            <Watch/>
            <Seperator/>
            <CreateProfiles/>
            <Seperator/>
            <FAQ/>
            <Seperator/>
            <Footer/>
        </Container>
    )
}

const Seperator = styled.div`
    background-color: #222;
    min-height: 20px;
`

const Container = styled.div`
    background-color: none;
    overflow: hidden;
`


export default Home
