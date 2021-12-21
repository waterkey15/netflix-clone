import React from 'react'
import styled from 'styled-components'

function Watch() {
    return (
        <Container>
            <LeftSide>
                <h1>Watch everywhere</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without playing more</h2>
            </LeftSide>
            <RightSide>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""/>
            </RightSide>
        </Container>
    )
}



const Container = styled.div`
    background-color: #000;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftSide = styled.div`
    flex-basis: 50%;
    flex-grow: 1;
    color: #fff;
    justify-content: center;
    h1{
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
        text-align: left;
        margin-left: 50px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            margin: 60px 100px;

        }
    }

    h2{
        font-size: 1.625rem;
        font-weight: 400;
        text-align: left;
        margin-left: 50px;
        @media (max-width: 768px) {
            text-align: center;
            font-weight: 400;
            font-size: 1.25rem;
            margin-right: 30px;
            
        }

    }
`

const RightSide = styled.div`
    flex-basis: 50%;
    flex-grow: 1;
    overflow: hidden;
    justify-content: center;

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


export default Watch
