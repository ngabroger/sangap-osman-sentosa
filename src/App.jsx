import React from 'react';
import './index.css';
import NavbarComponent from './components/navbar';
import HeroComponent from './components/heroComponent';
import FirstSection from './components/FirstSection';
import ProductComponent from './components/productComponent';
import SecondSection from './components/SecondSection';

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <HeroComponent />
      <FirstSection />
      <ProductComponent />
      <SecondSection />
    </div>
  );
}

export default App;
