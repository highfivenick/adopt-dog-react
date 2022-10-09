import React, { useState } from 'react';
import { DogCard } from './Dog-Card';
import { MenuItem, Icon, Button, Grid} from '@mui/material';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

export const DogGrid = () => {

  const displayCards = () => {

  }

  //20 cards per page - static
  //loop through cards, filling w info generated
  //

  return (
      <Grid container direction="row">
        <Grid >

        <DogCard/>

        </Grid>

        <Grid >

        <DogCard/>

        </Grid>
        <Grid>

        <DogCard/>

        </Grid>

        <Grid >

        <DogCard/>

        </Grid>

        <Grid >

        <DogCard/>

        </Grid>

        <Grid >

        <DogCard/>

        </Grid>
        
      </Grid>
  )
}