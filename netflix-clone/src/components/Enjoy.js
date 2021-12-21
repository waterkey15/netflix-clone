import React from 'react'
import styled from 'styled-components'

function Enjoy() {
    return (
        <Container>
            <LeftSide>
                <h1>
                    Enjoy on your tv
                </h1>
                <h2>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Bluray players, and more.
                </h2>
            </LeftSide>
            <RightSide>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
            </RightSide>
        </Container>
    )
}

const Container = styled.div`
    min-height: 500px;
    background-color: #000;
    color: #fff;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }



`

const RightSide = styled.div`
    width: 100vw;
    object-fit: contain;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 100%;
        height: auto;
        width: auto;
        flex: 0 0 120px;    
        @media (max-width: 768px) {
            width: 60vw;
            margin-bottom: 40px;
        }
    }



`

const LeftSide = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    h1{
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
        text-align: center;
        @media (max-width: 768px) {
            margin-top: 50px;
            font-size: 2.5rem;
        }

    }
    h2{
        
        font-size: 1.625rem;
        font-weight: 400;
        line-height: 1.1;
        margin-left: 80px;
        text-align: left;
        @media (max-width: 768px) {
            margin: 0 40px;
            text-align: center;
            font-size: 1.325rem;
        }
    }
`

export default Enjoy
