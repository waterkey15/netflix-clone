import React, { useState } from 'react'
import styled from 'styled-components'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const signIn = (e) => {
        e.preventDefault();
        
        // firebase login will go there 
        console.log(email)
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/home')
        })
        .catch(error => alert(error.message))

    }

    const handleSignUp = (e) =>{
        
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //create new user
            console.log(auth);
            if(auth){
                history.push('/home')
            }
        })
        .catch((error) => {
            alert(error.message)
        })
    }



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
            </Header>
            <Main>
                <SignInForm>
                    <Content>
                        <h2>Sign In</h2>
                        <EmailInput>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email or phonen number"/>
                        </EmailInput>
                        <PasswordInput>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                        </PasswordInput>
                        <button onClick={signIn}>
                            Sign In
                        </button>
                        <ToolBar>
                            <CheckBox>
                                <input type="checkbox" />
                                <label for="subscribeNews">Remember me</label>
                            </CheckBox>
                            <NeedHelp>
                                Need help?
                            </NeedHelp>
                        </ToolBar>
                        <SignInFacebook>
                            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt=""/>
                            <p>Login with Facebook</p>
                        </SignInFacebook>
                        <NewToNetflix>
                            <p>New to Netflix? <b onClick={handleSignUp} >Sign up now.</b></p>
                        </NewToNetflix>
                        <Security>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot <a>Learn more</a>
                        </Security>
                    </Content>
                </SignInForm>
            </Main>    
            <Footer>
                <p>Questions? Call 1-844-505-2993</p>
                <LinkContainer>
                    <a>
                        FAQ
                    </a>
                    <a>
                        Help Center
                    </a>
                    <a>
                        Terms of Use
                    </a>
                    <a>
                        Privacy
                    </a>
                    <a>
                        Cookie Preferences
                    </a>
                    <a>
                        Corporate Information
                    </a>
                </LinkContainer>
            </Footer>
        </Container>
    )
}

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a{
        width: 10%;
        min-width: 100px;
        vertical-align: top;
        font-size: 13px;
        @media (max-width: 768px) {
            width: 50%;
        } 
    }
`

const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right:0;
    opacity: 0.9;
    overflow: hidden;
    color: #757575;
    background-color: rgba(0, 0, 0, 1.8);
    padding: 70px 150px;
    text-align: center;
`

const Security = styled.div`
    font-size: 13px;
    color: #8c8c8c;
    text-align: left;
    @media (max-width: 768px) {
            width: 50%;
        } 
    a{
        color: #0071eb;
        cursor: pointer;
    }
`

const NewToNetflix = styled.div`
    p{
        color: #737373;
        font-size: 16px;
        font-weight: 500;
        margin-top: 16px;
        b{
            color: #fff;
            cursor: pointer;
        }
    }
`

const SignInFacebook = styled.div`
    display: flex;
    align-content: center;
    text-align: center;
    align-items: center;
    @media (max-width: 768px) {
            width: 50%;
        } 
    img{
        height: 20px;
        width: 20px;
        vertical-align: middle;
        margin-right: 10px;
    }
    p{
        color: #737373;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
    }
`

const NeedHelp = styled.div`
    color: #b3b3b3;
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;

`

const CheckBox = styled.div`
    input, label{
        color: #b3b3b3;
        font-size: 13px;
        left: -21px;
        top:0;
        font-weight: 500;

    }
`

const ToolBar = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
            width: 50%;
    } 

`

const EmailInput = styled.div`
    overflow: hidden;
    margin-top: 30px;
    input{
        background: #333;
        border-radius: 4px;
        border: 0;
        color: #fff;
        height: 50px;
        line-height: 50px;
        padding: 1px 20px 0;
        width: 100%;
        font-size: 1.10rem;
        @media (max-width: 768px) {
            width: 50vw;
        } 

    }
`
const PasswordInput = styled(EmailInput)`
`


const Content = styled.div`
    height: 100%;
    padding: 40px 40px;
    position: relative;
    button{
        width: 100%;
        background: #e50914;
        color: #fff;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 700;
        margin: 24px 0 12px;
        border: none;
        padding: 16px;
        line-height: 1em;
        @media (max-width: 768px) {
            width: 50%;
        } 
        
    }
    h2{
        margin: 0 0 10px 0;
    }
`

const SignInForm = styled.form`
    max-width: 500px;
    flex: 1;
    h2{

    }
`


const Main = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 500px;
    color: white;
    @media (max-width: 768px) {
        margin-right: 20px;
        align-items: center;
        text-align: center;
    } 
`

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
    overflow: hidden;

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


export default Login
