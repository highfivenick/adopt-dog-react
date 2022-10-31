import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'mui-image'
import transparentLogo from '../../images/transparentLogo.png'
import transparentLogoText from '../../images/transparentLogoText.png'
export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
              style={{ height: '9vh',
               paddingTop: '0.5vh',
               }}>
        <Toolbar style={{
          backgroundImage: `url(${transparentLogoText})`,
          backgroundSize: "contain",
          height: "10%",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'auto',
          paddingBottom: '0.75vh',
          justifyContent: 'space-between'
        }}>
          <Image
            src=  {transparentLogo}
            height='100%'
            width='5%'
            fit= 'cover'
            bgColor='inherit'
            style={{
            paddingBottom: '0.8vh'
            }}
          />
          <Image
            src=  {transparentLogo}
            height='100%'
            width='5%'
            fit= 'cover'
            bgColor='inherit'
            style={{
            paddingBottom: '0.8vh'
            }}
          />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
