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
    <Card sx={{
      width: '17rem', padding: '8px',
      borderRadius: '10px',
      height: '23rem',
      backgroundColor: '#fafafa',
      border: '.5rem #218cca96',
      borderStyle: 'ridge',
      boxShadow: '15px 22px 20px 10px #3b7aa159'
}}
// rgba(250,250,250,1) 20%, rgb(98 202 228 / 56%) 10%, rgb(131 199 131) 30% ,rgb(98 202 228 / 56%) 10%,rgba(250,250,250,1) 80%)
id = { id } >
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
        Contact {fName} at <a href={`mailto:${email}?subject=Thank you for visiting my site! &body = This is a website I built while learning React. I don't think I'll be doing front-end in Vanilla JS anymore. I hope you enjoy! Have a lovely day.`}>{email}</a> to learn more about adoption!
      </Typography>
    </CardContent>
  </CardActionArea>
    </Card >
  );
}