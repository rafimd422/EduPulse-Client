import { Box, Container, Stack, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Title from "./../../components/Title/Title";

const partnerIcons = [
  { Icon: TwitterIcon, name: "Twitter" },
  { Icon: GoogleIcon, name: "Google" },
  { Icon: PinterestIcon, name: "Pinterest" },
  { Icon: AppleIcon, name: "Apple" },
  { Icon: LinkedInIcon, name: "LinkedIn" },
];

const Trusted = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 9 },
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(248,250,252,0.9) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Title title="Partner With the" titleColor="Industry leaders" />
          <Typography
            sx={{
              mt: 1.5,
              mx: "auto",
              maxWidth: 640,
              color: "#667085",
              fontFamily: "'EB Garamond', serif",
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.8,
            }}
          >
            EduPulse grows through a network of respected brands, platforms,
            and learning-minded communities that value credible education and
            practical skill development.
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "28px",
            border: "1px solid rgba(16, 24, 40, 0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(246,248,252,0.98))",
            boxShadow: "0 20px 50px rgba(16, 24, 40, 0.06)",
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2.5, md: 3 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2.5, md: 3 }}
            sx={{
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 320 }}>
              <Typography
                sx={{
                  color: "#b42318",
                  fontSize: "0.76rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Trusted network
              </Typography>
              <Typography
                sx={{
                  mt: 0.75,
                  color: "#101828",
                  fontSize: { xs: "1.15rem", md: "1.28rem" },
                  fontWeight: 900,
                  lineHeight: 1.3,
                }}
              >
                Backed by a broader ecosystem of recognizable digital leaders.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 1.5, md: 2 }}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"
              sx={{ flex: 1 }}
            >
              {partnerIcons.map(({ Icon, name }) => (
                <Box
                  key={name}
                  sx={{
                    width: { xs: 72, sm: 88, md: 96 },
                    height: { xs: 72, sm: 88, md: 96 },
                    borderRadius: "22px",
                    display: "grid",
                    placeItems: "center",
                    color: "#344054",
                    backgroundColor: "rgba(255,255,255,0.86)",
                    border: "1px solid rgba(16, 24, 40, 0.08)",
                    boxShadow: "0 10px 22px rgba(16, 24, 40, 0.05)",
                    transition: "transform 0.22s ease, box-shadow 0.22s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 30px rgba(16, 24, 40, 0.08)",
                    },
                    "& svg": {
                      width: { xs: 34, md: 40 },
                      height: { xs: 34, md: 40 },
                    },
                  }}
                  aria-label={name}
                >
                  <Icon />
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Trusted;
