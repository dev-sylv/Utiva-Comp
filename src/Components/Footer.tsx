import React from 'react';
import styled from "styled-components";
import logo from "./Assets/utiva.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <FirstDiv>
                <Logo  src={logo}/>
                <p>
                We are the leading TECH EDUCATION company with students 
                from over 30 countries and a leading UK accreditation to
                deliver the best digital workforce training.
                </p>
                <Icons>
                    <BsFacebook />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                    <AiOutlineTwitter />
                </Icons>
            </FirstDiv>
            <SecondDiv>
                <Box>
                    <h6>Top Courses</h6>
                    <Nav>Data Accelerator</Nav>
                    <Nav>Data Incubator</Nav>
                    <Nav>Data Science Fellowship</Nav>
                    <Nav>Product Incubator</Nav>
                    <Nav>Product Accelerator</Nav>
                    <Nav> UI/UX Design</Nav>
                </Box>
            
                <Box>
                    <h6>Grow with Utiva</h6>
                    <Nav>Business</Nav>
                    <Nav>Individual</Nav>
                    <Nav>Impact</Nav>
                    <Nav>Utiva Kids</Nav>
                    <Nav>The Nucleus</Nav>
                    <Nav>Ubuntu</Nav>
                    <Nav>Utiva Hire</Nav>
                </Box>

                <Box>
                        <h6>Schools</h6>
                        <Nav>Data School</Nav>
                        <Nav>Design School</Nav>
                        <Nav>Product School</Nav>
                        <Nav>Programming School</Nav>
                        <Nav>Cloud Computing School</Nav>
                        <Nav>Blockchain Dev. School</Nav>
                        <Nav>Marketing School</Nav>
                </Box>

                <Box>
                       <h6> Company</h6>
                        <Nav>About us</Nav>
                        <Nav>Affiliate</Nav>
                        <Nav>Our Partners</Nav>
                        <Nav>Become a Trainer</Nav>
                        <Nav>Alumni</Nav>
                        <Nav>Careers</Nav>
                        <Nav>Business Network</Nav>
                        <Nav>Podcast</Nav>
                </Box>

                <Box>
                        <h6>Resources</h6>
                        <Nav>Blog</Nav>
                        <Nav>FAQs</Nav>
                        <Nav>Events</Nav>
                        <Nav>Success Stories</Nav>
                        <Nav>Masterclass</Nav>
                        <Nav>Consulting Practice</Nav>
                        <Nav>Scholarship</Nav>
                </Box>

                <Box>
                        <h6>Policies</h6>                    
                        <Nav>Terms and Conditions</Nav>
                        <Nav>Refund Policy</Nav>
                        <Nav>Privacy Policy</Nav>
                </Box>

                <Box>
                        <h6>Contact</h6>
                        <Nav>info@utiva.io</Nav>

                        <Nav>+234 803 515 2982</Nav>

                        <Nav>+44 749 538 0293</Nav>

                        <Nav>01 229 7777</Nav>
                </Box>
            </SecondDiv>
            <br />
            <br />
            <br />
            <CopyRg>
                <span>
                © 2022 Utiva. All right reserved.
                </span>
            </CopyRg>
        </Wrapper>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    /* height: 400px; */
    width : 100%;
    background-color: #f0f5f7;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Wrapper = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
`;
const FirstDiv = styled.div`
    /* height: 200px; */
    width : 300px;
    margin-top: 50px;
    /* background-color: blue; */

    p{
        font-size: 15px;
        color: black;
    }
`;
const SecondDiv = styled.div`
    /* height: 200px; */
    width : 65%;
    /* background-color: red; */
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
const Logo = styled.img`

`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    color: #000269;
    size: 100px;
`;
const Box = styled.div`

`;
const Nav = styled.div`
    padding-bottom: 20px;
    font-size: 11px;
    color: rgb(129, 132, 141);
    transition: all 350ms;

    :hover{
        color: orange; 
        cursor: pointer;
    }
`;
const CopyRg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: silver;
    margin-top: 50px;
`