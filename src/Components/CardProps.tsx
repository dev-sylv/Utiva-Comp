import React from 'react';
import styled from 'styled-components';
import TCard from "./Card";
import bukola from "./Assets/Bukola.webp";
import chiedozie from "./Assets/chiedozie.webp";
import elvis from "./Assets/Elvis.webp";
import Ezekiel from "./Assets/Ezekiel.webp";
import john from "./Assets/john.webp";
import lucius from "./Assets/lucius.webp";
import johnson from "./Assets/johnson.webp";
import kolade from "./Assets/kolade.webp";
import oluwarotimi from "./Assets/oluwarotimi.webp";
import opemipo from "./Assets/opemipo.webp";
import pascal from "./Assets/pascal.webp";
import samuel from "./Assets/samuel.webp";

const CardProps = () => {
  return (
    <Container>
        <Wrapper>
         
                <h3>Get Trained From the <br /> Best Of The Best</h3>

        <Hold>
        <TCard 
        image = {lucius}
        name = "Lucius Unegbu"
        bio = "Product Manager at Nubank"
        
        />

        <TCard 
                image = {oluwarotimi}
                name = "Oluwarotimi Adubi"
                bio = "Senior Product designer at Across The Horizon Technologies"
                
                />

        <TCard 
                image = {samuel}
                name = "Samuel Odile"
                bio = "Senior Product designer at Across The Horizon Technologies"
                
                />

        <TCard 
                image = {kolade}
                name = "Kolade Carew"
                bio = "Data Scientist & Head Project Information System at BISWAL LIMITED"
                
                />

        <TCard 
                image = {pascal}
                name = "Pascal Okechukwu"
                bio = "Data Analytics Specialist at Genesis Analytics"
                
                />

        <TCard 
                image = {johnson}
                name = "Johnson Adebayo"
                bio = "Data Analyst at Nevada Bridge TV"
                
                />

        <TCard 
                image = {opemipo}
                name = "Opemipo Durodola"
                bio = " Lead IoT Engineer at Venture Garden Group"
                
                />

        <TCard 
                image = {john}
                name = "John Adedigba"
                bio = "5X AWS| Cloud Developer"
                
                />

        <TCard 
                image = {chiedozie}
                name = "Chiedozie Egbuna"
                bio = "Data Engineer Brooklyn Data Co"
                
                />

        <TCard 
                image = {bukola}
                name = "Bukola Odunyemi"
                bio = "Product Manager Cassbana"
                
                />

        <TCard 
                image = {Ezekiel}
                name = "Ezekiel Aliyu"
                bio = "Software Developer Samoltech Studios LTD"
                
                />

        <TCard 
                image = {elvis}
                name = "Elvis Obi"
                bio = "Product Designer E-margination studios"
                
                />
        </Hold>

        </Wrapper>
    </Container>
  )
}

export default CardProps;

const Container = styled.div`
width: 100%;
/* height: 100vh; */
background-color: #F5F9FD;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;
const Wrapper = styled.div`
width: 90%;
/* height: 90vh; */
background-color: #F5F9FD;
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;

h3{
    color: #050794ed;
    font-size: 30px;
}
`;
const Hold = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;