import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Banner() {

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
         backgroundImage: `url(https://i.ibb.co/rZ6JJpV/element5-digital-Oy-Cl7-Y4y0-Bk-unsplash.jpg)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
       {/* <img style={{ display: 'none' }} src='{}' alt={} /> */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.4)'
        }}
      />
      <Grid container maxWidth={'lg'}>
        <Grid item md={6} sx={{my:'28px', mx:"auto"}}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="p" variant="h3" color="black" fontWeight={'800'} sx={{lineHeight:"4rem", mb:'4px'}}>
            Elevate Your Expertise with Edupalse
            </Typography>
            <Typography variant="p" color="inherit" paragraph>
            Explore a world of knowledge and skills at Edupalse. Our platform offers a diverse range of courses, expert instructors, and flexible learning options to help you achieve your goals. Start your journey to success today!
            </Typography>
            <Link variant="subtitle1" href="#">
              
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default Banner;