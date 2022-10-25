import { DogCard } from './Dog-Card';
import { Grid } from '@mui/material';

export const DogGrid = ({ dogInfoArr }) => {
  return (
    <Grid direction="row" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {/* <DropdownRadio dogInfoArr = {getDogData} dogInfoSetter = {setDogData}/> */}
      {dogInfoArr.map(el => {
        return <Grid xs={3}>
          <DogCard firstName={el.firstName} breed={el.name} sex={el.sex} age={el.age} temperament={el.temperament} id={el.id} />
        </ Grid>
      })}
    </Grid>
  )
}
//image = {el.image.url}