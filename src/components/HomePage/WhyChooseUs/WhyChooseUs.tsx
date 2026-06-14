import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Title from "./../../../components/Title/Title";

const whyChooseUsData = [
  {
    title: "Diverse Class Offerings",
    description:
      "Explore a wide range of classes covering various skills and subjects. From programming to creative arts, we offer diverse learning opportunities for every student.",
    icon: AutoAwesomeRoundedIcon,
    accent: "#d92d20",
    surface: "linear-gradient(180deg, #fff7f6 0%, #ffffff 100%)",
  },
  {
    title: "Experienced Instructors",
    description:
      "Learn from industry experts and experienced instructors dedicated to your success. Our passionate teachers are committed to providing quality education and guidance.",
    icon: SchoolRoundedIcon,
    accent: "#175cd3",
    surface: "linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%)",
  },
  {
    title: "Personalized Learning Experience",
    description:
      "Enjoy a personalized learning journey tailored to your pace and preferences. Our platform adapts to your unique needs, ensuring an effective and enjoyable learning experience.",
    icon: InsightsRoundedIcon,
    accent: "#087443",
    surface: "linear-gradient(180deg, #f3fbf6 0%, #ffffff 100%)",
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "radial-gradient(circle at top left, rgba(217, 45, 32, 0.08), transparent 24rem), radial-gradient(circle at bottom right, rgba(23, 92, 211, 0.08), transparent 28rem), #f8f9fc",
      }}
    >
      <Container maxWidth="lg">
        <Title title={"Why"} titleColor={"Choose Us?"} />

        <Box
          sx={{
            mx: "auto",
            mt: 2,
            mb: { xs: 4, md: 5 },
            maxWidth: 760,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#475467",
              fontFamily: "'EB Garamond', serif",
              fontSize: { xs: "1rem", md: "1.12rem" },
              fontWeight: 700,
              lineHeight: 1.8,
            }}
          >
            Built for learners who want structure and momentum, EduPulse pairs
            practical courses with thoughtful guidance so progress feels clear,
            focused, and worth returning to.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {whyChooseUsData.map((item) => {
            const Icon = item.icon;

            return (
              <Grid key={item.title} item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "24px",
                    border: "1px solid rgba(16, 24, 40, 0.08)",
                    background: item.surface,
                    boxShadow: "0 20px 40px rgba(16, 24, 40, 0.06)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 28px 56px rgba(16, 24, 40, 0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={1.5}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "18px",
                          display: "grid",
                          placeItems: "center",
                          color: item.accent,
                          backgroundColor: "rgba(255,255,255,0.88)",
                          boxShadow: "0 12px 28px rgba(16, 24, 40, 0.08)",
                          "& svg": {
                            fontSize: 28,
                          },
                        }}
                      >
                        <Icon />
                      </Box>
                      <Chip
                        label="Why it matters"
                        sx={{
                          borderRadius: "999px",
                          color: item.accent,
                          backgroundColor: "rgba(255,255,255,0.72)",
                          border: "1px solid rgba(16, 24, 40, 0.08)",
                          fontWeight: 800,
                        }}
                      />
                    </Stack>

                    <Typography
                      sx={{
                        mt: 3,
                        color: "#101828",
                        fontSize: { xs: "1.2rem", md: "1.32rem" },
                        fontWeight: 900,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1.5,
                        color: "#475467",
                        fontSize: "0.96rem",
                        fontWeight: 600,
                        lineHeight: 1.8,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
