import React from 'react'
import styled from 'styled-components';

interface pCard{
    logo: string;
    text: string;
}

const Partners: React.FC<pCard> = ({
    logo,
    text
}) => {
  return (
    <PartnersCard>
        <Cardwrap>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Text>
                <Paratext>
                    <p>
                        {text}
                    </p>
                </Paratext>
                <Link>Read more</Link>
            </Text>
        </Cardwrap>
    </PartnersCard>
  )
}

export default Partners;

const PartnersCard = styled.div`
    width: 42%;
    height: 350px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`;
const Cardwrap = styled.div`
    width: 80%;
    height: 300px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const Logo = styled.div`
    width: 50%;
    height: 100px;
    /* background-color: blue; */
    img{
        width: 60%;
        height: 60%;
        object-fit: contain;
    }
`;
const Text = styled.div`
    width: 90%;
    height: 150px;
    /* background-color: orange; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-weight: 400;
`;
const Paratext = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: green; */
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const Link = styled.div`
    width: 30%;
    height: 40px;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #050794;
    cursor: pointer;
    font-weight: bold;
`;