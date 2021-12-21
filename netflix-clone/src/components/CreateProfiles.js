import React from 'react'
import styled from 'styled-components'

function CreateProfiles() {
    return (
        <Container>
            <LeftSide>
                <img src="https://occ-0-999-1001.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt=""/>
            </LeftSide>
            <RightSide>
                <h1>Create profiles for kids</h1>
                <h2>Send kids pn adventures with their favorite charracters in a space made just for them-free with your membership</h2>
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
    padding-bottom: 70px;
    padding-top: 70px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

const LeftSide = styled.div`
    flex-basis: 50%;
    flex-grow: 1;
    overflow: hidden;
    img{
        max-width: 70%;
        height: auto;
        width: auto;
        flex: 0 0 120px;    
        @media (max-width: 768px) {
            width: 90vw;
        }    
    }

`

const RightSide = styled.div`
    color: #fff;
    flex-basis: 50%;
    flex-grow: 1;
    @media (max-width: 768px) {   
        margin-top: -20px;
    } 

    h1{
        text-align: left;
        font-size: 3.125rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
        margin-right: 30px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 2.5rem;
            
        }   

    }
    h2{
        text-align: left;
        font-size: 1.625rem;
        font-weight: 400;
        margin-right: 30px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 1.5rem;
        } 
    }
`


export default CreateProfiles
