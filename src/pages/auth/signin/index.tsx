import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  FormControl,
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
  LoginRounded,
  SchoolRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Head from "next/head";
import { JSX, useContext, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import lottieFile from "../../../assets/login/login.json";
import { AuthContext } from "@/Provider/auth-provider";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
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
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                minHeight: 620,
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
                    maxWidth: 460,
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { md: "3.75rem", lg: "4.4rem" },
                    fontWeight: 800,
                    lineHeight: 0.94,
                    letterSpacing: 0,
                  }}
                >
                  Resume your learning journey.
                </Typography>
                <Typography
                  sx={{
                    mt: 2.5,
                    maxWidth: 460,
                    color: "rgba(255, 255, 255, 0.72)",
                    fontFamily: fontStack,
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Access your classes, track progress, and keep building skills
                  with EduPulse.
                </Typography>
              </Box>

              <Box sx={{ mx: "auto", width: "82%", maxWidth: 430 }}>
                <Lottie animationData={lottieFile} />
              </Box>

              <Stack direction="row" spacing={1.25}>
                {["Secure access", "Student dashboard", "Course progress"].map(
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
              <Box sx={{ width: "100%", maxWidth: 430 }}>
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
                  Sign in
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
                  Welcome back. Enter your credentials to continue.
                </Typography>

                <Box component="form" noValidate onSubmit={handleLogin}>
                  <Stack spacing={2}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      sx={fieldSx}
                    />

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
                        autoComplete="current-password"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      endIcon={<LoginRounded />}
                      sx={{
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
                      Sign In
                    </Button>
                  </Stack>

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
                    {"Don't have an account? "}
                    <Link
                      href="/auth/signup"
                      sx={{
                        color: "#800000",
                        fontWeight: 900,
                        textDecoration: "none",
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SignIn;
