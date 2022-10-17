import React, { useState, useEffect } from 'react';
import { DogCard } from './Dog-Card';
import { dog } from  './Mock-Dog'
import { Grid } from '@mui/material';
import axios from "axios";
export const DogGrid = () => {
  console.log('INDG')
  const [getDogData, setDogData] = useState([])
 
  useEffect(() => {
    const options = {
      headers: { 'x-api-key': process.env.DOG_API_KEY }
    };
    const fetchDogData = () =>{
      axios.get(
        'https://api.thedogapi.com/v1/breeds', options
      )
        .then((data) => {
          const numberArr = []

          for(let i = 0; i < 24; i++ ) numberArr.push(Math.round(Math.random()*171))

          const copyDogDataArr = numberArr.map(el => data.data[el]) 
          
          setDogData([...copyDogDataArr])
        })
    }
    fetchDogData()}, []) 
    console.log("getDogData",getDogData)
    
  return (
   
    <Grid container direction="row" rowSpacing={6} columnSpacing={{ xs: 1 }}>
       {getDogData.map(el => {
        const {firstName, sex} = dog();
        return <Grid >
          <DogCard firstName = {firstName} name = {el.name} sex = {sex} age = {Math.round(Math.random()*13)} temperament = {el.temperament} image = {el.image.url}  id = {el.id} />
        </ Grid>
       })}
        
    </Grid>
  )
}

