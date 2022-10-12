import logo from './logo.svg';
import './App.css';
import { dog } from './components/Mock-Data/Mock-Dog';
import { DogGrid } from './components/Mock-Data/Dog-Grid';
import { DogCard } from './components/Mock-Data/Dog-Card';
import { optionGroupUnstyledClasses } from '@mui/base';
import React from 'react'
console.log('INAJ')
function App() {
  for(let i = 0; i < 2; i++) {
    console.log(dog())
  }
  return (
    <DogGrid/>
  );
}

export default App;
