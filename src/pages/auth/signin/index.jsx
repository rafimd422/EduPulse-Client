import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {useState} from 'react'
import Toolbar from '@mui/material/Toolbar';
import lottieFile from '../../../assets/login/login.json'
import Lottie from 'lottie-react';




export default function signIn() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);




    //event handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };




  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <Grid container component="main" justifyContent={'center'} sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          xl={6}
          sx={{alignSelf:'center', display:{xs:'none', sm:'grid'}}}
        >
        <Lottie animationData={lottieFile} />
        </Grid>

        <Grid item xs={12} sm={8} md={5} xl={6} elevation={6} marginTop={'3rem'} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Toolbar />
            <Toolbar />
            <Typography component="h1" color={'#708090'} fontWeight={'bold'} variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />



<FormControl variant="outlined" fullWidth>
  <InputLabel htmlFor="password" >Password</InputLabel>
  <OutlinedInput
    name='password'
    id="password"
    type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />
</FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'rgb(128, 0, 0)' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                "Don't have an account?
                  <Link href="/auth/signup" variant="body2">
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}