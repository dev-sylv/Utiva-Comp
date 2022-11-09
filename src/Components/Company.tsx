import React from 'react';
import grid1 from "./Assets/grid1.png";
import styled from 'styled-components';

const Company = () => {
  return (
    <Container>
        <Wrapper>
            <TextHolder>
                <Text1>
                    <h1>
                    Utiva is more than <br /> a company!
                    </h1>
                </Text1>
                <Text2>
                    <p>
                    Since 2018, we have helped professionals from over 1000 leading 
                    <br />
                     companies learn skills and develop capabilities to thrive in their <br />
                      workplaces and also stay relevant for the Future of Work.
                    </p>
                </Text2>
                <Text3>
                    <p> 
                        Today we have people (especially Blacks and Minorities) join our 
                        <br />
                        virtual learning programs from all over 30 countries. With an
                        <br />
                         ecosystem of over 90,000 talents, access to a 200+ faculty 
                         <br />
                         network, and robust curricula co-designed with business leaders, 
                         <br />
                         we are the leading tech-ed company for emerging economies.
                    </p>
                </Text3>
            </TextHolder>
            <ImageHolder>
                <img src={grid1} alt="" />
            </ImageHolder>
        </Wrapper>
    </Container>
  )
}

export default Company;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #F9F9F8;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TextHolder = styled.div`
    width: 90%;
    height: 70vh;
    /* background-color: yellow; */
`;
const ImageHolder = styled.div`
    width: 90%;
    height: 70vh;
    /* background-color: black; */

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
const Text1 = styled.div`
    color: #050794;
    font-size: 25px;
`;
const Text2 = styled.div`
     p{
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;
const Text3 = styled.div`
     p{
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;