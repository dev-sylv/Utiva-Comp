import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import utiva from "./Assets/utiva-white.svg";
import GlobalButton from './GlobalButton';
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [count, setCount] = useState<number>(0);

    const add = () =>{
        setCount(count + 1);
    }

    const show: string[] = ["none", "block"];

    const dropRef = useRef<any>();

    useEffect(() =>{
        dropRef.current.style.display = show[count % show.length];
    })
    return (
        <Container>
            <Wrapper>
                <Logo src={utiva}/>
                <Navigation>
                    <Nav onClick={add}>
                        Schools
                        <Icons>
                            <FaChevronDown />
                        </Icons>
                    </Nav>
                    <Nav  onClick={add}>
                        Enterprise
                        <Icons>
                            <FaChevronDown />
                        </Icons>
                    </Nav>
                    <Nav  onClick={add}>
                        Company
                        <Icons>
                            <FaChevronDown />
                        </Icons>
                    </Nav>
                </Navigation>
                <Holder>
                    <GlobalButton 
                    bg ="#FBAF1B"
                    bd = ""
                    text = "Get Started"
                    color = "white"
                    width = "120px"
                    />
                    <GlobalButton
                     bg ="white"
                     bd = "1px solid #000269"
                     text = "Login"
                     color = "#000269"
                     width = "100px"
                     />
                </Holder>
            </Wrapper>
    
            {
                <Drop ref={dropRef}>

                </Drop>
            }
        </Container>
      )
};

export default Header;

const Drop = styled.div`
position: absolute;
width: 75%;
height: 550px;
top: 70%;
z-index: 10;
background-color: skyblue;
border-radius: 10px;
margin: 40px;
`


const Container = styled.div`
position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    position: sticky;
    top: 0;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #0003A9;
    padding-left: 40px;
    padding-right: 40px;
    position: sticky;
    top: 0;
    z-index: 10px;

`;
const Logo = styled.img``;
const Navigation = styled.div`
    display: flex;
    font-size: 16px;
    color: white;
`;
const Nav = styled.div`
    display: flex;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
    transition: all 350ms;
    cursor: pointer;

    :hover{
        color: #EEA622;
    }
`;
const Icons = styled.div`
    margin-left: 20px;
`;
const Holder = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
`;