import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Head from "next/head";
import { JSX, useContext, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import lottieFile from "../../../assets/login/login.json";
import { AuthContext } from "@/Provider/auth-provider";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SignIn = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!auth?.signIn) {
      await Swal.fire({
        title: "Authentication Error",
        text: "SignIn method is not available.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      await auth.signIn(email, password);

      await Swal.fire({
        title: "Log In Successful",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Redirect after login
      router.push(router.pathname !== "/auth/signin" ? router.pathname : "/");
    } catch (error: any) {
      await Swal.fire({
        title: "Error!",
        text: error.message.replace("Firebase: Error ", ""),
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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

        <Grid item xs={12} sm={8} md={5} xl={6} mt="3rem">
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
                autoComplete="email"
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

              <Grid container justifyContent="flex-start" sx={{ mt: 2 }}>
                <Grid item>
                  <Typography variant="body2">
                    {"Don't have an account? "}
                    <Link href="/auth/signup" variant="body2">
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
