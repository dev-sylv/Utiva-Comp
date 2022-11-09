import React from 'react';
import styled from 'styled-components';
import microsoft from "./Assets/microsoft.webp";
import act from "./Assets/act.png";
import aiesec from "./Assets/aiesec.png";
import binance from "./Assets/binance.png";
import facebook from "./Assets/facebook.webp";
import halcyon from "./Assets/halcyon.png";
import jica from "./Assets/jica.webp";
import hp from "./Assets/hp.png";
import solve from "./Assets/solve.webp";
import jci from "./Assets/jci.png";
import PartnersCard from "./Partners";

const PartnersProps = () => {
  return (
    <Container>
        <h1>Our Partners</h1>
        <h6>Utiva has partnered with the most innovative companies in Africa for various <br />  workforce  and talent transformation programs</h6>
        <Wrapper>
            <PartnersCard 
                logo = {microsoft}
                text = "Utiva partners with Microsoft in collaboration that would help cloud computing learners get a globally recognised certification from Microsoft for as low as $12. Cloud Compu.."
            />
            <PartnersCard 
                logo = {hp}
                text = "Hewlett-Packard (HP) is backing Nigeria’s technology-education company, Utiva, in a $50,000 partnership meant to help more women and girls learn more premium technology skil..."
            />
            <PartnersCard 
                logo = {jica}
                text = "JICA worked with Utiva with access to funding and relationship to built its new technology product which helped to deliver learning to about 1000 young people"
            />
            <PartnersCard 
                logo = {act}
                text = "Act Foundation provided an impact grant to Utiva to deliver training to more than 5000 young people and funded the launch of new programs like Programming, Cloud Computing and Pr..."
            />
            <PartnersCard 
                logo = {solve}
                text = "MIT Solve provided funding to Utiva to build a new technology product called 'The Nucleus', this product was used to help the government of Nigeria deliver training to more than 2000 you..."
            />
            <PartnersCard 
                logo = {facebook}
                text = "Facebook, through the Facebook Accelerator program selected Utiva as one of the largest learning community in Africa and provided access to funding to drive training for people in 13..."
            />
            <PartnersCard 
                logo = {binance}
                text = "Binance Africa worked with Utiva to train more than 300 women and girls in Blockchain technology and tech skills virtually through coaching and mentoring! ..."
            />
            <PartnersCard 
                logo = {halcyon}
                text = "Halcyon Incubator selected Utiva in 2020. Through this partnership and incubation relationship, Utiva built its new set of virtual training programs and worked with Deloitte..."
            />
            <PartnersCard 
                logo = {jci}
                text = "Utiva partnered with JCI to train over 500 young people in awareness program in Nigeria and then extended the partnership to provide funding to 50 young people to learn tech..."
            />
            <PartnersCard 
                logo = {aiesec}
                text = "In 2021 and 2022, Utiva partnered with Aiesec to drive Tech skill awareness program in Nigeria. This project extended value to over 150 Aiesecers in Nigeria through the trai..."
            />
        </Wrapper>
    </Container>
  )
}

export default PartnersProps;

const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    background-color: #F5F9FD;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #0003A9;
    font-weight: 400;
    margin-bottom: -30px;
    h1{
        font-size: 50px;
        margin-top: 30px;
    }
    h6{
        text-align: center;
        font-size: 20px;
        font-weight: 200;
    }
`;
const Wrapper = styled.div`
    width: 90%;
    /* height: 100vh; */
    background-color: #F5F9FD;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #64666B;
`;