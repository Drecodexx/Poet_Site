import React from 'react';
import './App.css';
import Hnavbar from './components/Hnavbar'
import Navbar from './components/Navbar'
import Poems from './components/Poems'
import Section1 from './components/Section1'
import SectionHome1 from './components/SectionHome1'
import SectionHome2 from './components/SectionHome2'
import Footer from './components/Footer'
import FooterFooter from './components/FooterFooter'
function App() {
  return (
    <div className="  container-center App">
          <Navbar/>
          <Hnavbar/>


    <div className="mainContainer">
  
    
      <Section1/>
      <SectionHome2/>
      
      <Poems/>
      <Footer/>
      {/*
      <FooterFooter/>*/}
     </div>
    </div>
  );
}

export default App;
