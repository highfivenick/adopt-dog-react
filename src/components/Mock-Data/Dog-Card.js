import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const DogCard = ({ sex, age, image, id, firstName }) => {
  return (
    <Card sx={{ width: 360, padding: '8px' }} id={id}>
        <CardActionArea>
      <CardHeader/>
          <CardMedia
            component="img"
            height="180"
            width='360'
            image={image}
            alt="dog photo"
            style={{ objectFit: 'contain' }}
          />
      <CardContent>
        <Typography textAlign={'center'} gutterBottom variant="h5" component="div" firstName={firstName} >
          {firstName}
        </Typography>
        <Typography textAlign={'center'} variant="body2" color="text.secondary" sex={sex} age={age} firstName={firstName}>
          {sex}, {age} years old
        </Typography>
      </CardContent>
    </CardActionArea>
      </Card >
  );
}