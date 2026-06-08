import React, { useState, useContext, FormEvent, MouseEvent } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  PersonAddAltRounded,
  SchoolRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import { AuthContext } from "@/Provider/auth-provider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Loading from "../../../assets/Loading/loading.json";
import lottieFile from "../../../assets/login/login.json";
import Swal from "sweetalert2";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const logoSrc = "/edupulse-premium-logo.svg";
const fontStack =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "#fff",
    fontFamily: fontStack,
    transition: "box-shadow 180ms ease, border-color 180ms ease",
    "& fieldset": {
      borderColor: "#e2e8f0",
    },
    "&:hover fieldset": {
      borderColor: "#cbd5e1",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(128, 0, 0, 0.08)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#800000",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: fontStack,
    color: "#64748b",
    "&.Mui-focused": {
      color: "#800000",
    },
  },
};

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
    <Box>
      <Head>
        <title>Sign Up || EduPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Toolbar />
      <Box
        component="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "calc(100vh - 64px)", sm: "calc(100vh - 76px)" },
          bgcolor: "#f8fafc",
          py: { xs: 4, md: 8 },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 12%, rgba(14, 165, 233, 0.12), transparent 28%), radial-gradient(circle at 86% 10%, rgba(128, 0, 0, 0.09), transparent 26%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                minHeight: 680,
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                borderRadius: 2,
                p: 4,
                bgcolor: "#000",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 28px 80px rgba(15, 23, 42, 0.18)",
              }}
            >
              <Box>
                <Box
                  component="img"
                  src={logoSrc}
                  alt="EduPulse"
                  sx={{ width: 214, height: "auto", display: "block", mb: 5 }}
                />
                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 450,
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { md: "3.6rem", lg: "4.25rem" },
                    fontWeight: 800,
                    lineHeight: 0.94,
                    letterSpacing: 0,
                  }}
                >
                  Start learning with a stronger profile.
                </Typography>
                <Typography
                  sx={{
                    mt: 2.5,
                    maxWidth: 450,
                    color: "rgba(255, 255, 255, 0.72)",
                    fontFamily: fontStack,
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Create your student account, save your progress, and join the
                  EduPulse course library.
                </Typography>
              </Box>

              <Box sx={{ mx: "auto", width: "82%", maxWidth: 430 }}>
                <Lottie animationData={lottieFile} />
              </Box>

              <Stack direction="row" spacing={1.25}>
                {["Student account", "Profile ready", "Course access"].map(
                  (item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        bgcolor: "rgba(255, 255, 255, 0.07)",
                        color: "rgba(255, 255, 255, 0.82)",
                        fontFamily: fontStack,
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      {item}
                    </Box>
                  )
                )}
              </Stack>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                border: "1px solid #e2e8f0",
                bgcolor: "rgba(255, 255, 255, 0.92)",
                boxShadow: "0 28px 80px rgba(15, 23, 42, 0.1)",
                p: { xs: 2.5, sm: 4, md: 5 },
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 530 }}>
                <Box
                  component="img"
                  src={logoSrc}
                  alt="EduPulse"
                  sx={{
                    width: 180,
                    height: "auto",
                    display: { xs: "block", md: "none" },
                    mb: 3,
                  }}
                />
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    mb: 2,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    color: "#800000",
                    bgcolor: "#fff1f2",
                    border: "1px solid rgba(128, 0, 0, 0.12)",
                  }}
                >
                  <SchoolRounded />
                </Box>
                <Typography
                  component="h2"
                  sx={{
                    color: "#0f172a",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { xs: "2.4rem", sm: "2.9rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: 0,
                  }}
                >
                  Create account
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    mb: 3,
                    color: "#64748b",
                    fontFamily: fontStack,
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  Set up your profile to start enrolling in classes.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
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
                        sx={fieldSx}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        sx={fieldSx}
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
                        sx={fieldSx}
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
                        sx={fieldSx}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl variant="outlined" fullWidth sx={fieldSx}>
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
                      mt: 2.5,
                      minHeight: 50,
                      borderRadius: 2,
                      bgcolor: "#800000",
                      color: "#fff",
                      fontFamily: fontStack,
                      fontWeight: 900,
                      textTransform: "none",
                      boxShadow: "0 16px 36px rgba(128, 0, 0, 0.24)",
                      "&:hover": {
                        bgcolor: "#5f0000",
                        boxShadow: "0 20px 46px rgba(128, 0, 0, 0.3)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>

                  <Divider
                    sx={{ my: 2.5, color: "#94a3b8", fontFamily: fontStack }}
                  >
                    or
                  </Divider>

                  <SocialLogin />

                  <Typography
                    sx={{
                      mt: 2.5,
                      color: "#64748b",
                      fontFamily: fontStack,
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    Already have an account?{" "}
                    <Link
                      href="/auth/signin"
                      sx={{
                        color: "#800000",
                        fontWeight: 900,
                        textDecoration: "none",
                      }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Toolbar />
    </Box>
  );
};

export default SignUp;
