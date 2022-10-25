import logo from './logo.svg';
import './App.css';
import { dog } from './components/Mock-Data/Mock-Dog';
import { DogGrid } from './components/Mock-Data/Dog-Grid';
// import { TemporaryDrawer } from './components/Mock-Data/Drawer';
// import { RadioButtonsGroup } from './components/Mock-Data/Radio-Group';
 import { DropdownRadio } from './components/Mock-Data/DropdownRadio';
import { optionGroupUnstyledClasses } from '@mui/base';
import React from 'react'
console.log('INAJ')
function App() {
  for(let i = 0; i < 2; i++) {
    console.log(dog())
  }
  return (
    <>
      {/* <DropdownRadio dogInfoArr = {getDogData} /> */}
      <DropdownRadio defaultVal='All' value ='Age' value1='Age up' value2= 'Age down' label1 = 'Female' label2 = 'Male' label3 = 'All' />
    </>
  );
}

export default App;
