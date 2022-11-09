import React from 'react';
import styled from 'styled-components';

interface cardProps{
    image: string;
    headText: string;
    paraText: string;
}

const GetInvolved: React.FC<cardProps> = ({
    image,
    headText,
    paraText
}) => {
  return (
    <Card>
                <Image>
                    <img src={image} alt="" />
                </Image>
                <TextHold>
                    <h2>
                        {headText}
                    </h2>
                    <p>
                        {paraText}
                    </p>
                </TextHold>
            </Card>
  )
}

export default GetInvolved;


const Card = styled.div`
    width: 30%;
    height: 30vh;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Image = styled.div`
    width: 100%;
    height: 10vh;
    /* background-color: white; */
    
`;
const TextHold = styled.div`
    width: 100%;
    height: 20vh;
    /* background-color: orange; */
`;