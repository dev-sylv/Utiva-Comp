import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import GetInvolvedProps from './Components/GetInvolvedProps';
import Company from './Components/Company';
import BlueComp from './Components/BlueComp';
import CardProps from "./Components/CardProps";
import PartnersProps from './Components/PartnersProps';




const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <GetInvolvedProps />
      <Company />
      <BlueComp />
      <CardProps />
      <PartnersProps />
      <Footer />
    </div>
  )
}

export default App