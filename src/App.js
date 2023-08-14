import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import OurServices from './Components/OurServices';
import  Ourdentist from './Components/Ourdenditst';
import About from './Components/About';
import  ContactUs from './Components/ContactUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <OurServices/>
      <Ourdentist/>
      <About/>
      <ContactUs/>
      <PrivacyPolicy/>
      <TermsAndConditions/>
      
      
    </div>
  );
}

export default App;
