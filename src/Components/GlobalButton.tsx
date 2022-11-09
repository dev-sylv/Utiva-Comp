import React from 'react';
import styled from 'styled-components';

interface ButtonProps{
    bg: string;
    bd: string;
    text: string;
    color : string;
    width : string;
}

const GlobalButton:React.FC<ButtonProps> = ({
    bg, bd, text, color, width
}) => {
  return (
   <Button bg={bg} color = {color} bd = {bd} width = {width}>
    {text}
   </Button>
  )
}

export default GlobalButton;

const Button = styled.div<{
    bg: string;
    bd: string;
    color : string,
    width : string,
}>`
    height: 40px;
    width: ${(props) => props.width};
    background-color: ${(props) => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: ${(props) => props.color};
    font-size: 13px;
    cursor: pointer;
    transition: all 350ms;
    border: ${(props) => props.bd};

    transform: scale(0.98);
`;