import React from 'react';
import './index.css';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/heroComponent';
import { AboutComponent } from './components/aboutComponent';
AboutComponent;
function App() {
  return (
    <div className="min-h-screen">
      <NavbarComponent />

      <HeroComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
