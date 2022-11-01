import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { person } from './Mock-Person';

export const DogCard = ({ sex, age, image, id, firstName }) => {

  const { fName, email } = person()
  return (
    <Card sx={{ width: 360, padding: '8px' }} id={id}>
      <CardActionArea>
        <CardHeader />
        <CardMedia
          component="img"
          height="180"
          width='360'
          image={image}
          alt="dog photo"
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography textAlign={'center'} variant="h5" component="div" firstName={firstName}>
            {firstName}
          </Typography>
          <Typography textAlign={'center'} gutterBottom variant="body1" sex={sex} age={age} nfirstName={firstName}>
            {sex}, {age} years old
          </Typography>
          <Typography textAlign={'center'} variant="body2" color="text.secondary" email={email} fName={fName}>
            Contact {fName} at {email} to learn more about adoption!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}