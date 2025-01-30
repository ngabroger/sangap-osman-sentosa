import React, { useEffect, useState } from 'react';
import './index.css';
import { NavbarComponent } from "./components/navbar"
import {HeroComponent} from "./components/heroComponent"

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    function checkSystemColorScheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    checkSystemColorScheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemColorScheme);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkSystemColorScheme);
    };
  }, []);

  return (
    <div className={`app ${theme}`}>
      <NavbarComponent />
      <HeroComponent />
    </div>
  )
}

export default App
