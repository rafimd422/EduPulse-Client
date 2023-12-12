import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Banner = () => {

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
        backgroundImage: `url(https://i.ibb.co/Rj3dx8k/course-Banner.jpg)`,
        height:{xl:'90vh', lg:'80vh', md:'60vh',sm:'45vh'}
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.4)',
        }}
      />
      <Grid container maxWidth={'lg'}>
        <Grid item md={6} sx={{mx:'auto',my:'auto'}}>
          <Box
            sx={{
              position: 'relative',
              px:{md:'0', sm:'100px'},
              pt: {lg:'400px', md:'200px',sm:'120px', xs:'80px'},
    pb: {md:"250px"}
            }}
          >
            <Typography component="p" variant="h3" color="white" fontWeight={'800'} sx={{lineHeight:"4rem", fontSize:{xl:'3.5rem',sm:'2.85rem', xs:'2.3rem'}, mb:{md:'4px', xs:'8px'}, fontFamily:'EB Garamond'
}}> 
            Elevate Your Expertise with Edupalse
            </Typography>
            <Typography fontSize={{lg:'1.4rem', xs:'1rem'}} variant="p" color="inherit" paragraph>
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