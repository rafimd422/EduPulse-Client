import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/legacy/image";

import Title from "./../../components/Title/Title";

const metrics = [
  {
    icon: <PersonOutlineRoundedIcon />,
    value: "7.5K",
    label: "Active learners",
    note: "Growing month over month",
    tint: "#eef6ff",
    iconColor: "#0f5fa8",
  },
  {
    icon: <LocalLibraryRoundedIcon />,
    value: "70+",
    label: "Available classes",
    note: "Across in-demand disciplines",
    tint: "#fff6f7",
    iconColor: "#8b1e3f",
  },
  {
    icon: <Groups2RoundedIcon />,
    value: "7.5K",
    label: "Total enrollments",
    note: "High repeat engagement",
    tint: "#f0fdf4",
    iconColor: "#166534",
  },
];

const TotalUserSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "radial-gradient(circle at 14% 12%, rgba(14, 165, 233, 0.09), transparent 24%), radial-gradient(circle at 88% 16%, rgba(128, 0, 0, 0.08), transparent 22%), linear-gradient(180deg, #fcfaf6 0%, #f5f0e7 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            maxWidth: 780,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Title title={"Platform"} titleColor={" Analytics"} />
          <Typography
            sx={{
              mt: 2.25,
              mx: "auto",
              maxWidth: 620,
              color: "#667085",
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.75,
            }}
          >
            A quick snapshot of learner activity, course breadth, and enrollment
            momentum across EduPulse.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.02fr 0.98fr" },
            gap: { xs: 3, lg: 4 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                p: { xs: 2.75, md: 3.25 },
                borderRadius: 4,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "#ffffff",
                boxShadow: "0 26px 70px rgba(15, 23, 42, 0.08)",
              }}
            >
              <Stack
                direction="row"
                spacing={1.25}
                sx={{ alignItems: "flex-start", mb: 1.5 }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(139, 30, 63, 0.08)",
                    color: "#8b1e3f",
                    border: "1px solid rgba(139, 30, 63, 0.12)",
                    flexShrink: 0,
                  }}
                >
                  <BarChartRoundedIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#8b1e3f",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.35,
                    }}
                  >
                    Platform overview
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111827",
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: { xs: "1.95rem", md: "2.35rem" },
                      fontWeight: 800,
                      lineHeight: 1.05,
                    }}
                  >
                    Strong signals across learning, access, and engagement.
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: "#667085",
                  fontSize: 15,
                  lineHeight: 1.8,
                  maxWidth: 580,
                }}
              >
                This section gives visitors a faster sense of platform scale.
                Instead of decorative numbers, the layout presents key usage
                signals in a more deliberate product-style format.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  lg: "repeat(3, minmax(0, 1fr))",
                },
                gap: 2,
              }}
            >
              {metrics.map((metric) => (
                <Box
                  key={metric.label}
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 4,
                    border: "1px solid rgba(15, 23, 42, 0.08)",
                    bgcolor: "#ffffff",
                    boxShadow: "0 18px 46px rgba(15, 23, 42, 0.06)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: metric.tint,
                      color: metric.iconColor,
                      border: "1px solid rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    {metric.icon}
                  </Box>

                  <Typography
                    sx={{
                    mt: 2,
                    color: "#111827",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { xs: "2.1rem", md: "2.4rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography
                    sx={{
                    mt: 0.75,
                    color: "#0f172a",
                    fontSize: 15,
                    fontWeight: 800,
                    minHeight: 40,
                  }}
                >
                  {metric.label}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.75,
                      color: "#667085",
                      fontSize: 13,
                      lineHeight: 1.7,
                    }}
                  >
                    {metric.note}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 4,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "rgba(255, 255, 255, 0.82)",
                boxShadow: "0 18px 46px rgba(15, 23, 42, 0.05)",
              }}
            >
              <Stack
                direction="row"
                spacing={1.25}
                sx={{ alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "#8b1e3f",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  <TrendingUpRoundedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#8b1e3f",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.35,
                    }}
                  >
                    Summary insight
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.35,
                      color: "#111827",
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    Momentum indicator
                  </Typography>
                  <Typography
                    sx={{
                      color: "#667085",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    The platform is framed as active, growing, and course-rich.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: { xs: 320, md: 420, lg: 430 },
                borderRadius: 4,
                boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
              }}
            >
              <Image
                src="https://i.ibb.co/VjX2YrD/elisa-calvet-b-S3n-UOq-Dm-Uvc-unsplash.jpg"
                layout="fill"
                objectFit="cover"
                alt="Students collaborating while learning online"
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(15, 23, 42, 0.12) 0%, rgba(15, 23, 42, 0.72) 100%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: "auto 20px 20px 20px",
                  p: 2.5,
                  borderRadius: 3,
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  bgcolor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.74)",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                  }}
                >
                  Insight panel
                </Typography>
                <Typography
                  sx={{
                    mt: 0.75,
                    color: "#fff",
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  &ldquo;A platform designed around active participation, not
                  just passive browsing.&rdquo;
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "rgba(255, 255, 255, 0.76)",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  The analytics story is simple: learners are arriving,
                  enrolling, and returning with intent.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "#ffffff",
                  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "#8b1e3f",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.35,
                  }}
                >
                  Access
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#111827",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    minHeight: 52,
                  }}
                >
                  Broad course reach
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#667085",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  A diverse catalog gives learners room to explore across
                  multiple skill tracks.
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "#ffffff",
                  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "#0f5fa8",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.35,
                  }}
                >
                  Activity
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#111827",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    minHeight: 52,
                  }}
                >
                  Repeat learning behavior
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#667085",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  Enrollment volume suggests learners are engaging beyond a
                  single course touchpoint.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TotalUserSection;
