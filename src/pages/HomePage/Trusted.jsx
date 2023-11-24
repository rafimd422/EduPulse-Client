import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = (theme) => ({
    item: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
    },
  });
  


const Trusted = () => {

    const styles = useStyles();


  return (
    <Paper sx={{my:'1rem'}} elevation={0}>

      <Typography variant="h3" color="black" fontWeight={'800'} sx={{lineHeight:"4rem", mb:'4px', textAlign:'center'}}> 
        Partner With the <span style={{color:'#800000'}}>Industry leaders</span>
      </Typography>
      <Container maxWidth='lg' sx={{display:'flex', justifyContent:'center', gap:'3rem', flexWrap:'wrap', my:'2.4rem'}}>
        <Grid item className={styles.item}>
        <TwitterIcon sx={{height:'100px', width:'80px'}} />

        </Grid>
        <Grid item className={styles.item}>
        <GoogleIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item className={styles.item}>
        <PinterestIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item className={styles.item}>
        <AppleIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
        <Grid item className={styles.item}>
        <LinkedInIcon sx={{height:'100px', width:'80px'}} />
        </Grid>
      </Container>
    </Paper>
  );
};

export default Trusted;
