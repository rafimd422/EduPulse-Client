import React, { useState, useContext, FormEvent, MouseEvent } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  PersonAddAltRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import AuthShell, {
  authFieldSx,
  authFontStack,
} from "@/components/Auth/AuthShell";
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

    if (!photo || photo.size === 0) {
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
    <>
      <Head>
        <title>Sign Up || EduPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthShell
        badges={["Student account", "Profile ready", "Course access"]}
        heroDescription="Create your student account, save your progress, and join the EduPulse course library."
        heroTitle="Start learning with a stronger profile."
        intro="Set up your profile to start enrolling in classes."
        pageTitle="Create account"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={{ xs: 2, lg: 1.5, xl: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                sx={authFieldSx}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                sx={authFieldSx}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="image"
                type="file"
                name="image"
                label="Profile image"
                InputLabelProps={{ shrink: true }}
                inputProps={{ accept: "image/*" }}
                sx={authFieldSx}
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
                sx={authFieldSx}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth sx={authFieldSx}>
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
                  autoComplete="new-password"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            endIcon={<PersonAddAltRounded />}
            sx={{
              mt: { xs: 2.5, lg: 2, xl: 2.5 },
              minHeight: 52,
              borderRadius: 2,
              bgcolor: "#8b1e3f",
              color: "#fff",
              fontFamily: authFontStack,
              fontWeight: 900,
              textTransform: "none",
              boxShadow: "0 18px 38px rgba(139, 30, 63, 0.24)",
              "&:hover": {
                bgcolor: "#6f1732",
                boxShadow: "0 22px 48px rgba(139, 30, 63, 0.3)",
              },
            }}
          >
            Sign Up
          </Button>

          <Divider
            sx={{
              my: { xs: 2.5, lg: 2, xl: 2.5 },
              color: "#94a3b8",
              fontFamily: authFontStack,
            }}
          >
            or
          </Divider>

          <SocialLogin />

          <Typography
            sx={{
              mt: { xs: 2.5, lg: 2, xl: 2.5 },
              color: "#64748b",
              fontFamily: authFontStack,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              sx={{
                color: "#8b1e3f",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </AuthShell>
    </>
  );
};

export default SignUp;
