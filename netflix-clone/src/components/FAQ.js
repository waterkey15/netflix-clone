import React, { useState } from 'react'
import styled from 'styled-components'


function FAQ() {

    const [open, setOpen] = useState('')


    const handleAcordion = (event) => {
        console.log(open)
        if(open == event.target.id){
            setOpen('')
        }else{
            setOpen(event.target.id);
        }
    }




    return (
        <Container>
            <h1>Frequently Asked Questions</h1>
            <QuestionsContainer>
                <Questions>
                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={'whatIsNetflix'}>
                            What is Netflix?
                        </Question>
                        <Answer style={open == 'whatIsNetflix' ? {display:''} : {display:'none'}}>
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                            <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </Answer>
                    </QuestionAnswerPair>

                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={'cost'}>
                            How much does Netflix cost?
                        </Question>
                        <Answer style={open == 'cost' ? {display:''} : {display:'none'}}>
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.</p>
                        </Answer>
                    </QuestionAnswerPair>

                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={'whereToWatch'}>
                            Where can I watch?
                        </Question>
                        <Answer style={open == 'whereToWatch' ? {display:''} : {display:'none'}}>
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                            <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </Answer>
                    </QuestionAnswerPair>

                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={"cancel"}>
                            How do I cancel?
                        </Question>
                        <Answer style={open == 'cancel' ? {display:''} : {display:'none'}}>
                            <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </Answer>
                    </QuestionAnswerPair>

                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={"whatToWatch"}>
                            What can I watch on Netflix?
                        </Question>
                        <Answer style={open == 'whatToWatch' ? {display:''} : {display:'none'}}>
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </Answer>
                    </QuestionAnswerPair>

                    <QuestionAnswerPair>
                        <Question onClick={(e) => handleAcordion(e)} id={'kids'}>
                            Is Netflix good for kids?
                        </Question>
                        <Answer style={open == 'kids' ? {display:''} : {display:'none'}}>
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                            <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </Answer>
                    </QuestionAnswerPair>
                </Questions>
            </QuestionsContainer>
            <Body>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <MailBox>
                    <input type="text" placeholder="Email address"/>
                    <button>Get Started > </button>
                </MailBox>
            </Body>
        </Container>    
        
    )
}



const Container = styled.div`
padding-top: 50px;
    color: #fff;
    display: flex;
    background-color: #000;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
        font-size: 2.5rem;
        line-height: 1.1;
        margin-bottom: 0.5rem;
    }
`

const Questions = styled.div`
    background-color: #303030;
    width: 70vw;
`

const Question = styled.h2`
    padding: 0.8em 2.2em 0.8em 1.2em;
    margin-bottom: 1;
    font-weight: 400;
    text-align: left;
    display: flex;
    align-content: center;
    justify-content: space-between;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`

const Answer = styled.div`
    
    padding: 0 1.2em;
    text-align: left;
    font-size: 1.625rem;
    font-weight: 400;
    border-bottom: 8px solid #000;
    border-top: 1px solid #000;

    animation: showNav 250ms ease-in-out both;
    @keyframes showNav {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    @keyframes closeNav {
        from {opacity: 1;}
        to {opacity: 0;}
    }


    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
    h2{

    }
`

const QuestionsContainer = styled.div`
    margin-top: 30px;
`

const QuestionAnswerPair = styled.div`
    border-bottom: 8px solid #000;
`

const Body = styled.div`
    overflow: hidden;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    h3{
        padding-bottom: 20px;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 400;
        margin: 0 auto;
        @media (max-width: 768px) {
            text-align: center;
            padding: 0 30px;
        }

    }
    @media (max-width: 768px) {
        margin-top: 40px;
    }

`


const MailBox = styled.div` 
    margin: 0 150px;
    height: 50px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: center;
        text-align: center;
        align-content: center;
        align-items: center;
        margin: auto;
    }
    input{
        width: 70%;
        height: 100%;
        min-height: 50px;
        padding-left: 30px;
        border-radius: 2px;
        font-size: 1.1rem;
        margin: auto;
        @media (max-width: 768px) {
            margin-top: 20px;
            width: 90%;
        }
    }

    button{
        height: 100%;
        border: none;
        padding: 0 20px;
        background-color: #e50914;
        font-size: 1.325rem;
        color: #fff;
        margin: auto;
        @media (max-width: 768px) {
            margin-top: 20px;
            height: 50px;
        }
    }
   
`

export default FAQ
