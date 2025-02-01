import React from 'react';
import './index.css';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/heroComponent';
function App() {
  return (
    <div className="background-image">
      <NavbarComponent />
      <HeroComponent />
    </div>
  );
}

export default App;
