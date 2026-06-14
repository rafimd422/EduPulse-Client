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
          "radial-gradient(circle at 10% 10%, rgba(14, 165, 233, 0.08), transparent 24%), radial-gradient(circle at 92% 12%, rgba(180, 35, 24, 0.06), transparent 22%), linear-gradient(180deg, #fdfcf8 0%, #f5f2ea 100%)",
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
              mt: 2.25,
              mx: "auto",
              maxWidth: 700,
              color: "#667085",
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.82,
            }}
          >
            Find quick, reliable answers about enrollment, access, progress,
            and payments so moving through EduPulse feels simpler from the
            start.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.82fr 1.18fr" },
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "28px",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,250,251,0.98))",
              boxShadow: "0 24px 54px rgba(15, 23, 42, 0.08)",
              p: { xs: 2.5, md: 3 },
            }}
          >
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "#eef6ff",
                  color: "#0f5fa8",
                  border: "1px solid rgba(14, 95, 168, 0.12)",
                }}
              >
                <HelpOutlineRoundedIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#b42318",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 0.35,
                    textTransform: "uppercase",
                  }}
                >
                  Quick help
                </Typography>
                <Typography
                  sx={{
                    mt: 0.35,
                    color: "#111827",
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: { xs: "1.15rem", md: "1.25rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  Answers at a glance
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                mx: "auto",
                width: "100%",
                maxWidth: 300,
                py: { xs: 0.5, md: 1 },
              }}
            >
              <Lottie animationData={faq} />
            </Box>

            <Stack spacing={1.25}>
              {[
                "Enrollment, access, and payment basics in one place.",
                "Designed to support the decision flow before class signup.",
                "Compact reference panel paired with the full accordion list.",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 1.6,
                    borderRadius: "18px",
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#475467",
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
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
                defaultExpanded={idx === 0}
                sx={{
                  borderRadius: "22px !important",
                  overflow: "hidden",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  bgcolor: "rgba(255, 255, 255, 0.92)",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
                  transition: "transform 0.22s ease, box-shadow 0.22s ease",
                  "&::before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    boxShadow: "0 24px 54px rgba(15, 23, 42, 0.1)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "#f1f5f9",
                        color: "#0f172a",
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
                    minHeight: 84,
                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                      mr: 2,
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        flex: "0 0 auto",
                        borderRadius: "14px",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: idx === 0 ? "#fff5f4" : "#f8fafc",
                        color: idx === 0 ? "#b42318" : "#475467",
                        border: "1px solid rgba(15, 23, 42, 0.06)",
                        fontSize: 13,
                        fontWeight: 900,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#111827",
                          fontFamily: '"EB Garamond", Georgia, serif',
                          fontSize: { xs: "1.22rem", md: "1.42rem" },
                          fontWeight: 800,
                          lineHeight: 1.2,
                          letterSpacing: 0,
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ px: { xs: 2, md: 2.5 }, pb: 2.5, pt: 0 }}
                >
                  <Typography
                    sx={{
                      pl: { md: "56px" },
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
