import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, Chip, Container, Paper, Stack } from "@mui/material";
import teacher from "../../assets/teacher/teacher.json";
import Title from "../Title/Title";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const highlights = [
  "Share your expertise with motivated learners",
  "Build credibility through a structured platform",
  "Contribute to a focused education community",
];

export default function Teacher() {
  const router = useRouter();

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "radial-gradient(circle at top right, rgba(217, 45, 32, 0.08), transparent 24rem), radial-gradient(circle at bottom left, rgba(23, 92, 211, 0.08), transparent 28rem), #fcfcfd",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Title title={"Are You A"} titleColor="Teacher?" />

        <Paper
          elevation={0}
          sx={{
            mt: { xs: 3, md: 4 },
            overflow: "hidden",
            borderRadius: "30px",
            border: "1px solid rgba(16, 24, 40, 0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,249,252,0.98))",
            boxShadow: "0 28px 60px rgba(16, 24, 40, 0.08)",
            p: { xs: 2.5, md: 4 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mx: "auto",
                  maxWidth: 470,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, rgba(255,245,244,0.9), rgba(255,255,255,0.75))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                }}
              >
                <Lottie animationData={teacher} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Chip
                label="Teach with EduPulse"
                sx={{
                  mb: 2,
                  borderRadius: "999px",
                  color: "#b42318",
                  backgroundColor: "#fff1f0",
                  border: "1px solid rgba(180, 35, 24, 0.12)",
                  fontWeight: 800,
                }}
              />

              <Typography
                sx={{
                  color: "#101828",
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 900,
                  lineHeight: 1.08,
                }}
              >
                Become an Instructor
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#475467",
                  fontFamily: "'EB Garamond', serif",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.85,
                  maxWidth: 540,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Unlock the potential within you and make a lasting impact by
                becoming an instructor. Share your expertise, inspire learning,
                and contribute to a community of knowledge seekers. Join our
                mission to empower others through education and shape the future
                as a dedicated instructor.
              </Typography>

              <Stack
                spacing={1.25}
                sx={{
                  mt: 3,
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                {highlights.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    sx={{ color: "#344054" }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{ color: "#175cd3", fontSize: 20, flex: "0 0 auto" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.96rem",
                        fontWeight: 700,
                        lineHeight: 1.6,
                        textAlign: { xs: "left", md: "left" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                onClick={() => router.push("/teachonedupulse")}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 4,
                  minHeight: 52,
                  px: 3,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #800000, #b42318)",
                  color: "#fff",
                  fontSize: "0.98rem",
                  fontWeight: 900,
                  textTransform: "none",
                  boxShadow: "0 18px 32px rgba(180, 35, 24, 0.22)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #6f0000, #9f1f12)",
                    boxShadow: "0 22px 36px rgba(180, 35, 24, 0.28)",
                  },
                }}
                className="CheckButton"
              >
                Check it out!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
