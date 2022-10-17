import logo from './logo.svg';
import './App.css';
import { dog } from './components/Mock-Data/Mock-Dog';
import { DogGrid } from './components/Mock-Data/Dog-Grid';
import { TemporaryDrawer } from './components/Mock-Data/Drawer';
import { RadioButtonsGroup } from './components/Mock-Data/Radio-Group';
import { Dropdown } from './components/Mock-Data/Dropdown';
import { optionGroupUnstyledClasses } from '@mui/base';
import React from 'react'
console.log('INAJ')
function App() {
  for(let i = 0; i < 2; i++) {
    console.log(dog())
  }
  return (
    <>
      <TemporaryDrawer component1={<RadioButtonsGroup label='Sex' label1 = 'Female' label2 = 'Male' label3= 'All'/> } component2={<Dropdown id='Age'  value='age' label='Age ↑↓' value2='Age ↑' value3='Age ↓'/>}/>

      <DogGrid />
    </>
  );
}

export default App;
