import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const DogCard = ({name, sex, age, temperament, image,  id, firstName }) => {
  return (
      <Card sx={{ maxWidth: 345 }} id = {id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="dog photo"
           // style={{objectFit: fill }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" firstName = {firstName} >
              {firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary" name = {name} sex = {sex} age = {age} temperament = {temperament}>
            Breed: {name} Sex: {sex} Age: {age} Temperament: {temperament}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}