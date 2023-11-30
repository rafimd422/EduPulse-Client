import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import lottieFile from "../../../assets/login/login.json";
import Lottie from "lottie-react";
import Head from "next/head";
import { AuthContext } from "@/Provider/AuthProvider";
import { useRouter } from "next/router";
import swal from "sweetalert";
import SocialLogin from './../../../components/SocialLogin/SocialLogin';


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");


    signIn(email, password)
      .then((result) => {
        swal("Log In Successfull", {
          icon: "success",
        });
        if (router.pathname !== '/auth/signin') {
          router.push(router.pathname);
        } else {
          router.push('/');
        }
      })
      .catch((error) => {
        swal({
          title: "Error!",
          text: error.message.replace("Firebase: Error ", ''),
          icon: "error",
        });
      });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Head>
        <title>Sign in || EduPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >

        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          xl={6}
          sx={{ alignSelf: "center", display: { xs: "none", sm: "grid" } }}
        >
          <Lottie animationData={lottieFile} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          xl={6}
          elevation={6}
          marginTop="3rem"
          square='true'
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Toolbar />
            <Toolbar />
            <Typography
              component="h1"
              color="#708090"
              fontWeight="bold"
              variant="h5"
            >
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
            >
<TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email" // Enable email autocomplete
  autoFocus
/>

<FormControl variant="outlined" fullWidth>
  <InputLabel htmlFor="password">Password</InputLabel>
  <OutlinedInput
    name="password"
    id="password"
    type={showPassword ? "text" : "password"}
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
    autoComplete="current-password" 
  />
</FormControl>


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "rgb(128, 0, 0)" }}
              >
                Sign In
              </Button>
<SocialLogin />
              <Grid container>
                <Grid item>
                  {"Don't have an account?"}
                  <Link href="/auth/signup" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
