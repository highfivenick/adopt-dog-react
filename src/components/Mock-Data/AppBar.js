import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'mui-image'
import transparentLogo from '../../images/transparentLogo.png'
import transparentLogoText from '../../images/transparentLogoText.png'
export const ButtonAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        style={{
          height: '9vh',
          paddingTop: '0.5vh',
          borderBottom: '#218cca96',
          borderStyle: 'inset',
          background: 'linear-gradient(45deg, rgb(250, 250, 250) 0%, rgba(98, 202, 228, 0.65) 25%, hsl(114deg 70% 44%) 50%, rgba(98, 202, 228, 0.65) 75%, rgb(250, 250, 250) 100%)'
        }}>
        <Toolbar style={{
          backgroundImage: `url(${transparentLogoText})`,
          backgroundSize: "contain",
          height: "10%",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          paddingBottom: '0.75vh',
          justifyContent: 'space-between'
        }}>
          <Image
            src={transparentLogo}
            height='100%'
            width='5%'
            fit='cover'
            bgColor='inherit'
            style={{
              paddingBottom: '0.8vh'
            }}
          />
          <Image
            src={transparentLogo}
            height='100%'
            width='5%'
            fit='cover'
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
