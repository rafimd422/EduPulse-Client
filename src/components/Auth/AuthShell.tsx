import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
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
    minHeight: 52,
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
      boxShadow: "0 0 0 4px rgba(139, 30, 63, 0.08)",
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
  "& .MuiInputBase-input": {
    py: 1.55,
    fontFamily: authFontStack,
  },
  "& .MuiInputAdornment-root": {
    alignSelf: "center",
  },
  "& .MuiIconButton-root": {
    color: "#64748b",
    "&:hover": {
      bgcolor: "rgba(139, 30, 63, 0.08)",
      color: "#8b1e3f",
    },
  },
  "& input[type='file']": {
    cursor: "pointer",
  },
  "& input[type='file']::file-selector-button": {
    mr: 1.5,
    px: 1.5,
    py: 0.8,
    border: 0,
    borderRadius: 999,
    bgcolor: "#fff1f2",
    color: "#8b1e3f",
    cursor: "pointer",
    fontFamily: authFontStack,
    fontWeight: 800,
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
        overflow: { xs: "auto", lg: "hidden" },
        minHeight: "100vh",
        bgcolor: "#f7f4ed",
        background:
          "radial-gradient(circle at 12% 12%, rgba(14, 165, 233, 0.14), transparent 24%), radial-gradient(circle at 86% 10%, rgba(139, 30, 63, 0.12), transparent 24%), linear-gradient(180deg, #fcfbf7 0%, #f3eee4 100%)",
      }}
    >
      <CssBaseline />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          minHeight: { lg: "100vh" },
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, sm: 3, lg: 4 },
          py: { xs: 3, lg: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: { xs: 2, lg: 2 },
            flexShrink: 0,
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <Button
              component="a"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                minHeight: 40,
                px: 2,
                borderRadius: 999,
                border: "1px solid rgba(15, 23, 42, 0.09)",
                bgcolor: "rgba(255, 255, 255, 0.84)",
                color: "#0f172a",
                fontFamily: authFontStack,
                fontWeight: 800,
                textTransform: "none",
                letterSpacing: 0,
                boxShadow: "0 16px 34px rgba(15, 23, 42, 0.06)",
                backdropFilter: "blur(14px)",
                "&:hover": {
                  bgcolor: "#ffffff",
                  borderColor: "rgba(139, 30, 63, 0.16)",
                  boxShadow: "0 18px 38px rgba(15, 23, 42, 0.09)",
                },
                "&.Mui-focusVisible": {
                  outline: "3px solid rgba(139, 30, 63, 0.16)",
                  outlineOffset: 2,
                },
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            flex: { lg: "1 1 auto" },
            minHeight: 0,
            display: "flex",
            alignItems: { lg: "center" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 1280,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.04fr 0.96fr" },
              gap: { xs: 2.5, md: 3, lg: 4 },
              alignItems: "stretch",
              height: { lg: "clamp(640px, calc(100vh - 104px), 760px)" },
              "@media (min-width: 1200px) and (max-height: 730px)": {
                height: "clamp(590px, calc(100vh - 96px), 640px)",
              },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                height: "100%",
                minHeight: 0,
                p: { lg: 4, xl: 5 },
                borderRadius: 3,
                color: "#fff",
                overflow: "hidden",
                flexDirection: "column",
                background:
                  "radial-gradient(circle at 14% 16%, rgba(125, 211, 252, 0.2), transparent 24%), radial-gradient(circle at 86% 78%, rgba(139, 30, 63, 0.26), transparent 26%), linear-gradient(155deg, #040711 0%, #0f172a 54%, #1b2a41 100%)",
                boxShadow: "0 36px 96px rgba(15, 23, 42, 0.22)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
                "@media (min-width: 1200px) and (max-height: 730px)": {
                  p: 3,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  opacity: 0.14,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                  pointerEvents: "none",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 18,
                  borderRadius: 2.5,
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  pointerEvents: "none",
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
                <Box
                  component="img"
                  src={logoSrc}
                  alt="EduPulse"
                  sx={{
                    width: { lg: 188, xl: 214 },
                    height: "auto",
                    display: "block",
                    mb: { lg: 3, xl: 4 },
                    "@media (min-width: 1200px) and (max-height: 730px)": {
                      width: 172,
                      mb: 2,
                    },
                  }}
                />
                <Typography
                  sx={{
                    mb: 1.25,
                    color: "rgba(255, 255, 255, 0.62)",
                    fontFamily: authFontStack,
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0,
                  }}
                >
                  EduPulse Access
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 520,
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { lg: "3.45rem", xl: "4.25rem" },
                    fontWeight: 800,
                    lineHeight: 0.94,
                    letterSpacing: 0,
                    "@media (min-width: 1200px) and (max-height: 730px)": {
                      fontSize: "3rem",
                    },
                  }}
                >
                  {heroTitle}
                </Typography>
                <Typography
                  sx={{
                    mt: { lg: 2, xl: 2.25 },
                    maxWidth: 470,
                    color: "rgba(255, 255, 255, 0.72)",
                    fontFamily: authFontStack,
                    fontSize: { lg: "0.95rem", xl: "1rem" },
                    lineHeight: 1.75,
                    "@media (min-width: 1200px) and (max-height: 730px)": {
                      mt: 1.5,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    },
                  }}
                >
                  {heroDescription}
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  flex: "1 1 auto",
                  minHeight: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: { lg: 1.5, xl: 2 },
                }}
              >
                <Box
                  sx={{
                    width: "78%",
                    maxWidth: { lg: 340, xl: 420 },
                    maxHeight: "100%",
                    "& > div": {
                      maxHeight: { lg: 250, xl: 320 },
                    },
                    "& svg": {
                      maxHeight: { lg: 250, xl: 320 },
                    },
                    "@media (min-width: 1200px) and (max-height: 730px)": {
                      maxWidth: 300,
                      "& > div": {
                        maxHeight: 205,
                      },
                      "& svg": {
                        maxHeight: 205,
                      },
                    },
                  }}
                >
                  <Lottie animationData={lottieFile} />
                </Box>
              </Box>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  flexWrap: "wrap",
                  rowGap: 1,
                  flexShrink: 0,
                }}
              >
                {badges.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      px: 1.4,
                      py: 0.85,
                      borderRadius: 999,
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      bgcolor: "rgba(255, 255, 255, 0.07)",
                      color: "rgba(255, 255, 255, 0.84)",
                      fontFamily: authFontStack,
                      fontSize: 12,
                      fontWeight: 800,
                      "@media (min-width: 1200px) and (max-height: 730px)": {
                        px: 1.2,
                        py: 0.7,
                        fontSize: 11,
                      },
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
                height: { lg: "100%" },
                borderRadius: 3,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 34px 90px rgba(15, 23, 42, 0.11)",
                backdropFilter: "blur(20px)",
                p: { xs: 2.5, sm: 3.5, md: 4.5, lg: 3.5, xl: 5 },
                "@media (min-width: 1200px) and (max-height: 730px)": {
                  p: 3,
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: 540, lg: 438, xl: 500 },
                }}
              >
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
                    width: { xs: 46, lg: 42, xl: 46 },
                    height: { xs: 46, lg: 42, xl: 46 },
                    mb: { xs: 1.5, lg: 1.25, xl: 1.5 },
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
                  sx={{
                    mb: 0.75,
                    color: "#8b1e3f",
                    fontFamily: authFontStack,
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0,
                  }}
                >
                  Private access
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    color: "#111827",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: {
                      xs: "2.3rem",
                      sm: "2.9rem",
                      lg: "2.35rem",
                      xl: "2.9rem",
                    },
                    fontWeight: 800,
                    lineHeight: 0.98,
                    letterSpacing: 0,
                  }}
                >
                  {pageTitle}
                </Typography>
                <Typography
                  sx={{
                    mt: { xs: 1, lg: 0.75, xl: 1 },
                    mb: { xs: 3, lg: 2, xl: 2.5 },
                    color: "#667085",
                    fontFamily: authFontStack,
                    fontSize: 15,
                    lineHeight: 1.65,
                    maxWidth: 460,
                  }}
                >
                  {intro}
                </Typography>
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
