import React, { useState, useEffect } from 'react';
import { DogCard } from './Dog-Card';
import { Grid } from '@mui/material';

export const DogGrid = ({dogInfoArr} ) => {
  return (   
    <Grid container direction="row" rowSpacing={6} columnSpacing={{ xs: 1 }}>
      {/* <DropdownRadio dogInfoArr = {getDogData} dogInfoSetter = {setDogData}/> */}
       {dogInfoArr.map(el => {      
        return <Grid >
          <DogCard firstName = {el.firstName} breed = {el.name} sex = {el.sex} age = {el.age} temperament = {el.temperament} image = {el.image.url}  id = {el.id} />
        </ Grid>
       })}    
    </Grid>
  )
}

