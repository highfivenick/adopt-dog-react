import './App.css';
import { DropdownRadio } from './components/Mock-Data/DropdownRadio';
import { ButtonAppBar } from './components/Mock-Data/AppBar';

import React from 'react'
function App() {
  return (
    <>
      <header style={{borderBottom: '.5rem groove rgb(71, 178, 67)'}}>
        <ButtonAppBar />
      </header>
      <DropdownRadio defaultVal='Age ↕︎' value='Age' value1='Age ↑' value2='Age ↓' label1='Female' label2='Male' label3='All'  />
      <footer  style={{borderTop: '.5rem ridge rgb(71, 178, 67)'}}>
        <ButtonAppBar />
      </footer>
    </>
  );
}

export default App;
