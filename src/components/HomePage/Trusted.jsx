import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Title from './../../components/Title/Title';



const Trusted = () => {



  return (
    <Paper sx={{my:'1rem'}} elevation={0}>
<Title title='Partner With the' titleColor='Industry leaders' />
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'center', gap:'3rem', flexWrap:'wrap', my:'2.4rem'}}>
        <Grid item style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <TwitterIcon sx={{height:'100px', width:'80px'}} />

        </Grid>
        <Grid item style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <GoogleIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <PinterestIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <AppleIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <LinkedInIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
      </Container>
    </Paper>
  );
};

export default Trusted;
