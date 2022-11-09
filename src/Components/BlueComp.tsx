import React from 'react';
import styled from 'styled-components';

const BlueComp = () => {
  return (
    <Container>
        <Wrapper>
            <h2>
                Join our <span>growing Community</span> of <br /> 30,000+ 
                professionals trained

            </h2>
        </Wrapper>
    </Container>
  )
}

export default BlueComp;

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #050794;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 50%;
    height: 30vh;
    display: flex;
    justify-content: center;
    /* background-color: yellow; */

    h2{
        font-size: 40px;
        color: white;
        span{
            color: #FBAF1B;
        }
    }
`;