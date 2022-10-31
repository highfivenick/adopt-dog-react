import logo from './logo.svg';
import './App.css';
import { dog } from './components/Mock-Data/Mock-Dog';
 import { DropdownRadio } from './components/Mock-Data/DropdownRadio';
 import { ButtonAppBar } from './components/Mock-Data/AppBar';

import React from 'react'
console.log('INAJ')
function App() {
  for(let i = 0; i < 2; i++) {
    console.log(dog())
  }
  return (
    <>
      <ButtonAppBar/>
      <DropdownRadio defaultVal='All' value ='Age' value1='Age ↑' value2= 'Age ↓' label1 = 'Female' label2 = 'Male' label3 = 'All' dropLabel='Age ↕︎'/>
    </>
  );
}

export default App;
