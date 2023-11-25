import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, IconButton, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
import Head from "next/head";
import axios from "axios";
import swal from "sweetalert";
import { AuthContext } from "@/Provider/AuthProvider";
import { useRouter } from "next/router";
import Loading from "@/components/Loading/Loading";


export default function index() {
    const [showPassword, setShowPassword] = React.useState(false);
    const { createUSer,updateUserProfile,loading}= React.useContext(AuthContext);
    const router = useRouter()


    // event handler 
const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // preparing our api to make image upload input working
    const photo = data.get('image')
    const formData = new FormData();
    formData.append('image', photo);
    await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
        const user = {
            email: data.get('email'),
            password: data.get('password'),
            image: res.data?.data?.display_url,
            name: data.get('firstName') +" " + data.get('lastName'),
          };

          createUSer(user?.email, user?.password)
          .then(() => {
            updateUserProfile(user?.name, user?.image)
            router.push('/')
          })
          .catch((error) => {
            swal({
              title: "Error!",
              text: error.message.replace("Firebase: Error ", ""),
              icon: "error",
            });
          });

          console.log(user)

          if(loading){
            return <Loading />
          }







    })
    .catch(error => console.log(error.message))

  };






  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
        <Head>
    <title> Sign Up || EduPulse</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
        <Toolbar/>
        <Toolbar/>
        <Container component="main" maxWidth="sm">
        <CssBaseline />
 
    <Toolbar>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
        }}
      >

        <Typography component="h1" color={'#708090'} fontWeight={'bold'} variant="h5">
              Sign Up
            </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="image"
                type='file'
                name="image"
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
  <OutlinedInput
    name='password'
    id="password"
    placeholder='Password'
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

            </Grid>





























          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(128, 0, 0)' }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography variant="body2">
                Already have an account? <Link href={'/auth/signin'}>Sign in</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Toolbar>
      </Container>
      <Toolbar/>
    </Box>
  )
}
