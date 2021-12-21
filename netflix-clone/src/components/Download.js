import React from 'react'
import styled from 'styled-components'

function Download() {
    return (
        <Container>
            <LeftSide>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
            </LeftSide>
            <RightSide>
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch</h2>
            </RightSide>
        </Container>
    )
}


const Container = styled.div`
    background-color: #000;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftSide = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    margin-bottom: 70px;
    object-fit: contain;
    padding: 20px 0px;
    @media (max-width: 768px) {
        width: 100%;
    }   

    img{
        width: 45vw;
        height: auto;
        object-fit: contain;
        @media (max-width: 768px) {
            width: 80vw;
            margin-top: -20px;
        } 
    }

`
const RightSide = styled.div`
    color: white;
    width: 50%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 60px;
        margin-top: -35px;
    }   

    h1{
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
        margin: 0 0 0 0.4rem;
        @media (max-width: 768px) {
            margin: 0 30px;
            text-align: center;
            font-size: 2.5rem;
        } 
    }

    h2{
        font-size: 1.625rem;
        font-weight: 400;
        margin-right: 4rem;
        @media (max-width: 768px) {
            margin: 0 30px;
            text-align: center;
            font-size: 1.25rem;
        } 
    }

`

export default Download
