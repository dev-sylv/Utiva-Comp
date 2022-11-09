import React from 'react';
import styled from 'styled-components';
import GetInvolved from './GetInvolved';
import interview from "./Assets/interview.svg";
import application from "./Assets/application.svg";
import model from "./Assets/model.svg";


const GetInvolvedProps = () => {
  return (
    <Container>
        <Wrapper>
         
                <h3>How to get involved</h3>

        <Hold>
        <GetInvolved 
        image = {model}
        headText = "Review Our Model"
        paraText= 'Review the Utiva Learning Structure and Delivery Model to ensure we fit your expectation'
        
        />

    <GetInvolved 
            image = {application}
            headText = "Fill application form"
            paraText=' Send in your details and apply to be a coach through a simple application'
            
            />

    <GetInvolved 
            image = {interview}
            headText = "Interview"
            paraText=' Our Team will have a thorough screening process to ensure quality of education'
            
            />

    <GetInvolved 
            image = {interview}
            headText = "Onboarding"
            paraText='Upon confirmation, our team will have the first preliminary call with you'
            
            />

    <GetInvolved 
            image = {interview}
            headText = "Start training"
            paraText='If you are confirmed, we will onboard you with a team of other faculties.'
            
            />
        </Hold>

        </Wrapper>
    </Container>
  )
}

export default GetInvolvedProps;

const Container = styled.div`
width: 100%;
/* height: 100vh; */
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Wrapper = styled.div`
width: 90%;
/* height: 90vh; */
/* background-color: red; */
display: flex;
/* justify-content: space-around; */
flex-direction: column;
flex-wrap: wrap;
/* align-items: center; */

h3{
    color: #050794ed;
    font-size: 30px;
}
`;
const Hold = styled.div`
    display: flex;
    flex-wrap: wrap;
`;