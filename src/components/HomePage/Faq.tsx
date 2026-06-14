import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";

import faq from "../../assets/Faq/faq.json";
import Title from "./../Title/Title";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqs = [
  {
    question: "How do I sign up for classes on your platform?",
    answer:
      "Create an account, sign in, browse available classes, and open the course you want. The enrollment steps are available directly on the class details page.",
  },
  {
    question: "Can I access my classes from any device?",
    answer:
      "Yes. EduPulse is designed for desktop, tablet, and mobile use, so you can continue learning wherever it is convenient.",
  },
  {
    question: "Are there prerequisites for enrolling in certain classes?",
    answer:
      "Some classes include prerequisites to make sure learners have the right foundation. Review the class description before enrolling.",
  },
  {
    question: "How do I track my progress in a course?",
    answer:
      "Your progress is tracked automatically as you move through lessons and tasks. The course dashboard shows completion status and your overall progress.",
  },
  {
    question: "What payment methods are accepted for course enrollment?",
    answer:
      "We support secure online payment methods, including major credit and debit card flows available during enrollment.",
  },
];

const Faq = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "radial-gradient(circle at 8% 8%, rgba(14, 165, 233, 0.08), transparent 22%), radial-gradient(circle at 92% 12%, rgba(128, 0, 0, 0.06), transparent 20%), linear-gradient(180deg, #fcfbf7 0%, #f6f3ec 100%)",
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
          <Title title={"Frequently Asked"} titleColor="Questions" />
          <Typography
            sx={{
              mt: 2.5,
              mx: "auto",
              maxWidth: 680,
              color: "#667085",
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.8,
            }}
          >
            Find clear answers about enrollment, access, learning progress, and
            payments so you can move through EduPulse with less friction.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.92fr 1.08fr" },
            gap: { xs: 3, lg: 4 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 3,
              border: "1px solid rgba(15, 23, 42, 0.08)",
              bgcolor: "#ffffff",
              boxShadow: "0 28px 70px rgba(15, 23, 42, 0.08)",
              p: { xs: 2.5, md: 3.5 },
              minHeight: { lg: 620 },
            }}
          >
            <Box >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "#eef6ff",
                  color: "#0f5fa8",
                  border: "1px solid rgba(14, 95, 168, 0.12)",
                }}
              >
                <HelpOutlineRoundedIcon />
              </Box>
              <Typography
                sx={{
                  mt: 2,
                  color: "#111827",
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: { xs: "2rem", md: "2.4rem" },
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: 0,
                }}
              >
                Support that feels clear and immediate.
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "#667085",

                  fontSize: 15,
                  lineHeight: 1.8,
                  maxWidth: 460,
                }}
              >
                These are the questions learners ask most before they enroll.
                The goal is simple: remove uncertainty and help people get to
                the right class faster.
              </Typography>
            </Box>

            <Box
              sx={{
                mx: "auto",
                width: "100%",
                maxWidth: 360,
                my: { xs: 3, lg: 2 },
              }}
            >
              <Lottie animationData={faq} />
            </Box>

            <Stack spacing={1.25}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Typography
                  sx={{
                    color: "#0f172a",

                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                  }}
                >
                  Fast answers
                </Typography>
                <Typography
                  sx={{
                    mt: 0.75,
                    color: "#64748b",

                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Common enrollment and course questions are covered in one
                  place.
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {faqs.map((item, idx) => (
              <Accordion
                key={item.question}
                disableGutters
                elevation={0}
                sx={{
                  borderRadius: "20px !important",
                  overflow: "hidden",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "rgba(255, 255, 255, 0.88)",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: idx === 0 ? "#8b1e3f" : "#f1f5f9",
                        color: idx === 0 ? "#fff" : "#0f172a",
                        transition: "all 180ms ease",
                        ".Mui-expanded &": {
                          bgcolor: "#8b1e3f",
                          color: "#fff",
                        },
                      }}
                    >
                      <ExpandMoreRoundedIcon />
                    </Box>
                  }
                  sx={{
                    px: { xs: 2, md: 2.5 },
                    py: 1,
                    minHeight: 80,
                    "& .MuiAccordionSummary-content": {
                      my: 1.25,
                      mr: 2,
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        mb: 0.5,
                        color: "#8b1e3f",

                        fontSize: 12,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: 0.35,
                      }}
                    >
                      {`Question ${idx + 1}`}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#111827",
                        fontFamily: '"EB Garamond", Georgia, serif',
                        fontSize: { xs: "1.25rem", md: "1.45rem" },
                        fontWeight: 800,
                        lineHeight: 1.2,
                        letterSpacing: 0,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ px: { xs: 2, md: 2.5 }, pb: 2.5, pt: 0 }}
                >
                  <Typography
                    sx={{
                      color: "#667085",

                      fontSize: 15,
                      lineHeight: 1.8,
                      maxWidth: 760,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
