import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import NextLink from "next/link";

import courseBanner from "@/assets/courseBanner.jpg";

const Banner = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 72px)" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#050816",
        backgroundImage: `
          radial-gradient(circle at 18% 18%, rgba(50, 195, 255, 0.22), transparent 28%),
          linear-gradient(90deg, rgba(3, 7, 18, 0.96) 0%, rgba(3, 7, 18, 0.84) 42%, rgba(3, 7, 18, 0.38) 74%, rgba(3, 7, 18, 0.72) 100%),
          url(${courseBanner.src})
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "60% center", md: "center" },
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.75), transparent)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: { xs: 640, md: 720 } }}>
          <Stack
            direction="row"
            spacing={1.25}
            sx={{
              mb: 3,
              flexWrap: "wrap",
              rowGap: 1.25,
              alignItems: "center",
            }}
          >
            {["Expert-led courses", "Flexible learning", "Career-ready skills"].map(
              (label) => (
                <Box
                  key={label}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 999,
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    color: "rgba(255, 255, 255, 0.82)",
                    fontFamily:
                      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: { xs: 12, sm: 13 },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {label}
                </Box>
              )
            )}
          </Stack>

          <Typography
            component="h1"
            sx={{
              maxWidth: 760,
              fontFamily: '"EB Garamond", Georgia, serif',
              fontWeight: 800,
              fontSize: { xs: "3rem", sm: "4.5rem", md: "5.6rem" },
              lineHeight: { xs: 0.96, md: 0.92 },
              letterSpacing: 0,
              textWrap: "balance",
              textShadow: "0 22px 60px rgba(0, 0, 0, 0.45)",
            }}
          >
            Elevate your expertise with EduPulse
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 620,
              color: "rgba(255, 255, 255, 0.78)",
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              lineHeight: 1.7,
            }}
          >
            Learn from expert instructors, explore practical courses, and build
            skills with a platform designed for focused, flexible growth.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, alignItems: { xs: "stretch", sm: "center" } }}
          >
            <Button
              component={NextLink}
              href="/allclasses"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                minHeight: 52,
                px: 3,
                borderRadius: 2,
                bgcolor: "#fff",
                color: "#050816",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 800,
                textTransform: "none",
                boxShadow: "0 18px 45px rgba(255, 255, 255, 0.18)",
                "&:hover": {
                  bgcolor: "#e0f2fe",
                  boxShadow: "0 22px 55px rgba(56, 189, 248, 0.25)",
                },
              }}
            >
              Explore Classes
            </Button>
            <Button
              component={NextLink}
              href="/teachonedupulse"
              variant="outlined"
              sx={{
                minHeight: 52,
                px: 3,
                borderRadius: 2,
                borderColor: "rgba(255, 255, 255, 0.26)",
                color: "#fff",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 800,
                textTransform: "none",
                bgcolor: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(14px)",
                "&:hover": {
                  borderColor: "rgba(125, 211, 252, 0.65)",
                  bgcolor: "rgba(125, 211, 252, 0.12)",
                },
              }}
            >
              Teach on EduPulse
            </Button>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 3 }}
            sx={{
              mt: { xs: 5, md: 7 },
              pt: { xs: 3, md: 4 },
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              maxWidth: 670,
            }}
          >
            {[
              {
                icon: <SchoolRoundedIcon fontSize="small" />,
                value: "50+",
                label: "Curated courses",
              },
              {
                icon: <WorkspacePremiumRoundedIcon fontSize="small" />,
                value: "Expert",
                label: "Instructor network",
              },
            ].map((item) => (
              <Stack
                key={item.label}
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "center", minWidth: 0 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    color: "#7dd3fc",
                    bgcolor: "rgba(125, 211, 252, 0.12)",
                    border: "1px solid rgba(125, 211, 252, 0.22)",
                  }}
                >
                  {item.icon}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily:
                        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: { xs: "1.05rem", md: "1.18rem" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.66)",
                      fontFamily:
                        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: 13,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          inset: "auto 0 0",
          height: 130,
          background:
            "linear-gradient(180deg, transparent, rgba(3, 7, 18, 0.72))",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default Banner;
