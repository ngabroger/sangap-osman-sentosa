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

      <div className="background-image min-h-screen">
        <HeroComponent />
      </div>
      <AboutComponent />
    </div>
  );
}

export default App;
