import React from 'react'
import styled from 'styled-components'

function Footer(props) {
    return (
        <Container>
            <p style={{fontSize: '18px'}}>Question? Call 1-812-112-3322</p>
            <FooterElements>
                <p>FAQ</p>
                <p>Help Center</p>
                <p>Account</p>
                <p>Media Center</p>
                <p>Investor Relations</p>
                <p>Jobs</p>
                <p>Redeem Gift Cards</p>
                <p>Buy Gift Cards</p>
                <p>Ways to Watch</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
                <p>Contact Us</p>
                <p>Speed Test</p>
                <p>Legal Notices</p>
                <p>Only on Netflix</p>


                
            </FooterElements>
        </Container>
    )
}

const Container = styled.div`
    overflow: hidden;
    background-color: #000;
    color: #757575;
    display: flex;
    flex-direction: column;
    padding: 60px 60px;
    justify-content: center;
`

const FooterElements = styled.div`
    display: flex;
    flex-wrap: wrap;
    p{
        width: 25%;
        min-width: 100px;
        vertical-align: top;
        font-size: 13px;
        @media (max-width: 768px) {
            width: 50%;
        } 
    }
`


export default Footer
