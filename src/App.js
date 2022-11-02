import './App.css';
import { dog } from './components/Mock-Data/Mock-Dog';
import { DropdownRadio } from './components/Mock-Data/DropdownRadio';
import { ButtonAppBar } from './components/Mock-Data/AppBar';

import React from 'react'
function App() {
  return (
    <>
    <header>
      <ButtonAppBar />
    </header>
      <DropdownRadio defaultVal='All' value='Age' value1='Age ↑' value2='Age ↓' label1='Female' label2='Male' label3='All' dropLabel='Age ↕︎' />
      <footer>
      <ButtonAppBar />
      </footer>
    </>
  );
}

export default App;
