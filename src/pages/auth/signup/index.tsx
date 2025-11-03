import React, { useState, useContext, FormEvent, MouseEvent } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import { AuthContext } from "@/Provider/auth-provider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Loading from "../../../assets/Loading/loading.json";
import Swal from "sweetalert2";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUSer, updateUserProfile, loading } =
    useContext(AuthContext) ?? {};
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const photo = data.get("image") as File | null;

    if (!photo) {
      Swal.fire({
        title: "Error",
        text: "Please upload a profile image.",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", photo);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const user = {
        email: data.get("email") as string,
        password: data.get("password") as string,
        image: res.data?.data?.display_url as string,
        name: `${data.get("firstName")} ${data.get("lastName")}`,
      };

      if (!createUSer) {
        Swal.fire({
          title: "Error",
          text: "Sign up function is not available.",
          icon: "error",
        });
        return;
      }

      await createUSer(user.email, user.password);
      await updateUserProfile?.(user.name, user.image);

      const userData = {
        email: user.email,
        image: user.image,
        name: user.name,
        role: "student",
      };

      await axiosPublic.post("/user", userData);

      Swal.fire({
        title: "Success",
        text: "Registration completed successfully!",
        icon: "success",
      });

      router.push("/");
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text:
          error.message?.replace("Firebase: Error ", "") ??
          "Something went wrong",
        icon: "error",
      });
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={Loading} />
      </Box>
    );
  }

  return (
    <Box>
      <Head>
        <title>Sign Up || EduPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Toolbar />
      <Toolbar />

      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Toolbar>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 6,
            }}
          >
            <Typography
              component="h1"
              color="#708090"
              fontWeight="bold"
              variant="h5"
            >
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

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="image"
                    type="file"
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
                      name="password"
                      id="password"
                      placeholder="Password"
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
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "rgb(128, 0, 0)" }}
              >
                Sign Up
              </Button>

              <SocialLogin />

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link href="/auth/signin">Sign in</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      <Toolbar />
    </Box>
  );
};

export default SignUp;
