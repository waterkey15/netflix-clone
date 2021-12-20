import React from 'react'
import styled from 'styled-components'

function Greeting() {
    return (
        <Container>
                <Fade >
                </Fade>
            <Background>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3679b63e-5d92-47a1-96ec-b26d86fc0f0a/3b84a299-cd3e-4b9c-b508-66ce3dc70bb9/US-en-20211213-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
            </Background>
            <Header>
                <Logo>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"/>
                </Logo>
                <RightSide>
                    <select name="language" id="language">
                        <option value="english">English</option>
                        <option value="espanol">Espanol</option>
                    </select>
                    <button>Sign In</button>
                </RightSide>
            </Header>
            <Body>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <MailBox>
                    <input type="text" placeholder="Email address"/>
                    <button>Get Started > </button>
                </MailBox>
            </Body>
        </Container>
    )
}


const Fade = styled.div`
    height: 2.4rem;
    background-image: linear-gradient(
        360deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        black
    );
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0;
    right:0;
`


const Container = styled.div`
    min-height: 900px;
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0;
    right:0;
    z-index: -1;
    opacity: 0.9;
    overflow: hidden;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
        background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
        
    }

`

const Header = styled.div`
    padding-top: 40px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

`

const Logo = styled.div`
    img{
        width: 185px;
        object-fit: contain;
        @media (max-width: 768px) {
            width: 135px;
        }
    }
`

const RightSide = styled.div`
    select{
        margin-right: 20px;
        padding: 7px 5px;
        background-color: #111;
        color: white;
        font-weight: 400;
        font-size: 1rem;
        width: 90px;
        @media (max-width: 768px) {
            margin-right: 20px;
        }

    }
    button{
        font-size: 1rem;
        margin-right: 20px;
        padding: 7px 5px;
        background-color: #e50914;
        color: white;
        font-weight: 400;
        border: none;
        width: 80px;

    }
`

const Body = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1{
        font-size: 3.125rem;
        color: #fff;
        font-weight: bold;
        margin-block-start: 0.67rem;
        margin-block-end: 0.67rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        max-width: 640px;
        margin: 0 auto;
    }

    h2{
        font-size: 1.625rem;
        color: #fff;
        margin: 1rem auto;
        font-weight: 400;
        margin-block-start: 0.83rem;
        margin-block-end: 0.83rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    h3{
        padding-bottom: 20px;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 400;
        margin: 0 auto;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

`
const MailBox = styled.div` 
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        height: 300px;
    }


    input{
        padding: 0px 5px;
        font-size: 15px;
        min-width: 500px;
        line-height: normal;
        border: none;
        height: 60px;
        @media (max-width: 768px) {
            width: 20px;
            padding-left: 100px;
        }

    }
    button{
        padding-bottom: 10px;
        justify-content: center;
        text-align: center;
        font-size: 15px;
        line-height: initial;
        border: none;
        border-left: 1px solid #333;
        font-size: 1.625rem;
        min-height: 69px;
        margin-top: 15px;
        background-color: #e50914;
        color: white;
        @media (max-width: 768px) {
            width: 50%;
        }
    }
`

export default Greeting
