import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoginRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import Head from "next/head";
import { JSX, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/Provider/auth-provider";
import AuthShell, {
  authFieldSx,
  authFontStack,
} from "@/components/Auth/AuthShell";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

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
    <>
      <Head>
        <title>Sign in || EduPulse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthShell
        badges={["Secure access", "Student dashboard", "Course progress"]}
        heroDescription="Access your classes, track progress, and keep building skills with EduPulse."
        heroTitle="Resume your learning journey."
        intro="Welcome back. Enter your credentials to continue."
        pageTitle="Sign in"
      >
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
              sx={authFieldSx}
            />

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
                autoComplete="current-password"
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<LoginRounded />}
              sx={{
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
              Sign In
            </Button>
          </Stack>

          <Divider
            sx={{ my: 2.5, color: "#94a3b8", fontFamily: authFontStack }}
          >
            or
          </Divider>

          <SocialLogin />

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748b",
              fontFamily: authFontStack,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            {"Don't have an account? "}
            <Link
              href="/auth/signup"
              sx={{
                color: "#8b1e3f",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </AuthShell>
    </>
  );
};

export default SignIn;
