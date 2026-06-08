import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ReactNode } from "react";

import lottieFile from "@/assets/login/login.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const authFontStack =
  '"Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif';

export const authFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "#fff",
    fontFamily: authFontStack,
    transition: "box-shadow 180ms ease, border-color 180ms ease",
    "& fieldset": {
      borderColor: "#d6dce5",
    },
    "&:hover fieldset": {
      borderColor: "#b8c3d1",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(109, 40, 217, 0.06)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8b1e3f",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: authFontStack,
    color: "#667085",
    "&.Mui-focused": {
      color: "#8b1e3f",
    },
  },
};

const logoSrc = "/edupulse-premium-logo.svg";

interface AuthShellProps {
  badges: string[];
  children: ReactNode;
  heroDescription: string;
  heroTitle: string;
  intro: string;
  pageTitle: string;
}

export default function AuthShell({
  badges,
  children,
  heroDescription,
  heroTitle,
  intro,
  pageTitle,
}: AuthShellProps) {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        bgcolor: "#f6f4ee",
        background:
          "radial-gradient(circle at 12% 12%, rgba(14, 165, 233, 0.12), transparent 24%), radial-gradient(circle at 86% 10%, rgba(139, 30, 63, 0.11), transparent 24%), linear-gradient(180deg, #fbfaf7 0%, #f4f1ea 100%)",
        py: { xs: 2, md: 3 },
      }}
    >
      <CssBaseline />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: { xs: 2, md: 3 },
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <Button
              component="a"
              startIcon={<ArrowBackRoundedIcon />}
              endIcon={<HomeRoundedIcon />}
              sx={{
                minHeight: 44,
                px: 2,
                borderRadius: 999,
                border: "1px solid rgba(15, 23, 42, 0.1)",
                bgcolor: "rgba(255, 255, 255, 0.78)",
                color: "#0f172a",
                fontFamily: authFontStack,
                fontWeight: 800,
                textTransform: "none",
                boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  bgcolor: "#ffffff",
                },
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 2.5, md: 3.5 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              minHeight: 720,
              p: 5,
              borderRadius: 3,
              color: "#fff",
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "space-between",
              background:
                "linear-gradient(160deg, #050816 0%, #0f172a 55%, #1e293b 100%)",
              boxShadow: "0 34px 90px rgba(15, 23, 42, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Box>
              <Box
                component="img"
                src={logoSrc}
                alt="EduPulse"
                sx={{ width: 214, height: "auto", display: "block", mb: 6 }}
              />
              <Typography
                component="h1"
                sx={{
                  maxWidth: 520,
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: { lg: "4rem", xl: "4.8rem" },
                  fontWeight: 800,
                  lineHeight: 0.93,
                  letterSpacing: 0,
                }}
              >
                {heroTitle}
              </Typography>
              <Typography
                sx={{
                  mt: 2.5,
                  maxWidth: 470,
                  color: "rgba(255, 255, 255, 0.72)",
                  fontFamily: authFontStack,
                  fontSize: "1rem",
                  lineHeight: 1.8,
                }}
              >
                {heroDescription}
              </Typography>
            </Box>

            <Box sx={{ mx: "auto", width: "82%", maxWidth: 430 }}>
              <Lottie animationData={lottieFile} />
            </Box>

            <Stack direction="row" spacing={1.25} sx={{ flexWrap: "wrap" }}>
              {badges.map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.5,
                    py: 1,
                    borderRadius: 999,
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    bgcolor: "rgba(255, 255, 255, 0.07)",
                    color: "rgba(255, 255, 255, 0.84)",
                    fontFamily: authFontStack,
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              border: "1px solid rgba(15, 23, 42, 0.08)",
              bgcolor: "rgba(255, 255, 255, 0.86)",
              boxShadow: "0 34px 90px rgba(15, 23, 42, 0.1)",
              backdropFilter: "blur(18px)",
              p: { xs: 2.25, sm: 3.5, md: 4.5, lg: 5 },
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 540 }}>
              <Box
                component="img"
                src={logoSrc}
                alt="EduPulse"
                sx={{
                  width: 182,
                  height: "auto",
                  display: { xs: "block", lg: "none" },
                  mb: 3,
                }}
              />
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  mb: 2,
                  borderRadius: 2.5,
                  display: "grid",
                  placeItems: "center",
                  color: "#8b1e3f",
                  bgcolor: "#fff1f2",
                  border: "1px solid rgba(139, 30, 63, 0.14)",
                }}
              >
                <SchoolRoundedIcon />
              </Box>
              <Typography
                component="h2"
                sx={{
                  color: "#111827",
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: { xs: "2.3rem", sm: "2.9rem" },
                  fontWeight: 800,
                  lineHeight: 0.98,
                  letterSpacing: 0,
                }}
              >
                {pageTitle}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  mb: 3,
                  color: "#667085",
                  fontFamily: authFontStack,
                  fontSize: 15,
                  lineHeight: 1.7,
                  maxWidth: 460,
                }}
              >
                {intro}
              </Typography>
              {children}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
