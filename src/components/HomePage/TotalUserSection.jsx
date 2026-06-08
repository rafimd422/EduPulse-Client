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

const fontStack =
  '"Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif';

const TotalUserSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "radial-gradient(circle at 12% 10%, rgba(14, 165, 233, 0.08), transparent 24%), radial-gradient(circle at 88% 14%, rgba(128, 0, 0, 0.07), transparent 22%), linear-gradient(180deg, #fcfbf7 0%, #f4f1ea 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            maxWidth: 760,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Title title={"Platform"} titleColor={"Analytics"} />
          <Typography
            sx={{
              mt: 2.5,
              mx: "auto",
              maxWidth: 680,
              color: "#667085",
              fontFamily: fontStack,
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.8,
            }}
          >
            A clear snapshot of learner activity, class availability, and
            enrollment momentum across the EduPulse platform.
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
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "#ffffff",
                boxShadow: "0 28px 70px rgba(15, 23, 42, 0.08)",
              }}
            >
              <Stack
                direction="row"
                spacing={1.25}
                sx={{ alignItems: "center", mb: 1.5 }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "#eef6ff",
                    color: "#0f5fa8",
                    border: "1px solid rgba(15, 95, 168, 0.12)",
                  }}
                >
                  <BarChartRoundedIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#8b1e3f",
                      fontFamily: fontStack,
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.35,
                    }}
                  >
                    Live platform snapshot
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111827",
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      fontWeight: 800,
                      lineHeight: 1.05,
                    }}
                  >
                    Strong signals across learning and engagement.
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: "#667085",
                  fontFamily: fontStack,
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
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
              }}
            >
              {metrics.map((metric) => (
                <Box
                  key={metric.label}
                  sx={{
                    height: "100%",
                    p: 2.25,
                    borderRadius: 3,
                    border: "1px solid rgba(15, 23, 42, 0.08)",
                    bgcolor: "#ffffff",
                    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
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
                      fontSize: { xs: "2rem", md: "2.25rem" },
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
                      fontFamily: fontStack,
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    {metric.label}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.75,
                      color: "#667085",
                      fontFamily: fontStack,
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
                borderRadius: 3,
                border: "1px solid rgba(15, 23, 42, 0.08)",
                bgcolor: "rgba(255, 255, 255, 0.78)",
                boxShadow: "0 20px 50px rgba(15, 23, 42, 0.05)",
              }}
            >
              <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "#8b1e3f",
                    color: "#fff",
                  }}
                >
                  <TrendingUpRoundedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#111827",
                      fontFamily: fontStack,
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    Momentum indicator
                  </Typography>
                  <Typography
                    sx={{
                      color: "#667085",
                      fontFamily: fontStack,
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
                minHeight: { xs: 320, md: 420, lg: 100 },
                borderRadius: 3,
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
                    "linear-gradient(180deg, rgba(15, 23, 42, 0.06) 0%, rgba(15, 23, 42, 0.62) 100%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: "auto 20px 20px 20px",
                  p: 2.25,
                  borderRadius: 2.5,
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  bgcolor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.74)",
                    fontFamily: fontStack,
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                  }}
                >
                  Learner engagement
                </Typography>
                <Typography
                  sx={{
                    mt: 0.75,
                    color: "#fff",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  A platform designed around active participation, not just
                  passive browsing.
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
                  p: 2.25,
                  borderRadius: 3,
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "#ffffff",
                  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "#8b1e3f",
                    fontFamily: fontStack,
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
                  }}
                >
                  Broad course reach
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#667085",
                    fontFamily: fontStack,
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
                  p: 2.25,
                  borderRadius: 3,
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "#ffffff",
                  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "#0f5fa8",
                    fontFamily: fontStack,
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
                  }}
                >
                  Repeat learning behavior
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#667085",
                    fontFamily: fontStack,
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
