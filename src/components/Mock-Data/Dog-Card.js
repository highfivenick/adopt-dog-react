import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const DogCard = ({breed, sex, age, temperament, image,  id, firstName }) => {
  return (
      <Card sx={{ maxWidth: 330 }} id = {id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="dog photo"
           // style={{objectFit: fill }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" firstName = {firstName} >
              {firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary" breed = {breed} sex = {sex} age = {age} temperament = {temperament}>
            Breed: {breed} Sex: {sex} Age: {age} Temperament: {temperament}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}