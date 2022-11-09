import React from 'react';
import styled from 'styled-components';
import earth from "./Assets/bgearth.webp";

const Hero = () => {
  return (
    <Container>

       <Content>
            <h1>
            Digital Transformation for 
            <br />
            Individuals and Businesses.
            </h1>
            <p>
            We are a Technology Workforce Development company that helps people <br /> learn premium technology skills virtually and partners with companies to <br /> hire the best talents and invest in workforce development. Currently with <br /> learners from 19 countries.
            </p>
        </Content>
        <Image src={earth} />
    </Container>
  )
}

export default Hero;

const Container = styled.div`
  width: 100%;
  /* height: 700px; */
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color : #0003A9;
`;
const Image = styled.img`
    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
    object-fit: contain;
`;
const Content = styled.div`
     /* position: absolute; */
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: black; */
    h1{
        font-size: 50px;
    }
    p{
      font-size: 20px;
    }
`;