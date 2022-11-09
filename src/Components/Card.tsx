import React from 'react'
import styled from 'styled-components';

interface trainers{
    image: string;
    name: string;
    bio: string;
}

const TCard: React.FC<trainers> = ({
    image,
    name,
    bio
}) => {
  return (
    <Card>
        <CardWrap>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Name>
            <h4>
            {name}
            </h4>
        </Name>
        <Bio>
            <p>
            {bio}
            </p>
        </Bio>
        </CardWrap>
    </Card>
  )
}

export default TCard;

const Card = styled.div`
    width: 23%;
    height: 35vh;
    background-color: #FFFFFF;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const CardWrap = styled.div`
    width: 80%;
    height: 28vh;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    text-align: center;
`;
const Image = styled.div`
    width: 80%;
    height: 15vh;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 80%;
        height: 80%;
        object-fit: contain;
        /* border-radius: 50%; */
        /* border: 1px dotted #FF4F4F; */
        /* background-color: red; */
    }
`;
const Name = styled.div`
    width: 100%;
    height: 5vh;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    h4{
        font-size: 15px;
    }

`;
const Bio = styled.div`
    width: 100%;
    height: 10vh;
    /* background-color: skyblue; */
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 13px;
    }
`;