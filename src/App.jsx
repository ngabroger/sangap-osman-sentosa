import React from 'react';
import './index.css';
import NavbarComponent from './components/navbar';
import HeroComponent from './components/heroComponent';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
// import ForthSection from './components/forthSection';
import CatalogSection from './components/CatalogSection'
import FooterSection from './components/footerSection';

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <HeroComponent />
      <FirstSection />
      <ThirdSection />
      <SecondSection />
      <CatalogSection/>
      {/* <ForthSection /> */}
      <FooterSection />
    </div>
  );
}

export default App;
