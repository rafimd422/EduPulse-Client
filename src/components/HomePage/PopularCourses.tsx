import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Title from "./../../components/Title/Title";
import Items, { type CarouselCourse } from "./CarouselItems/Items";

const courses: CarouselCourse[] = [
  {
    id: 1,
    courseTitle: "Graphic Design Mastery",
    shortDescription:
      "Unleash your creativity with advanced graphic design techniques and tools.",
    img: "https://wemakepro.com/wp-content/uploads/2022/05/Graphics-Design-Mastery-1-1024x576.jpg",
    route: "/allclasses/65663f0fb75a711bc1fba2e8",
  },
  {
    id: 2,
    courseTitle: "Data Science Essentials",
    shortDescription:
      "Explore the world of data science and analytics to make informed decisions.",
    img: "https://miro.medium.com/v2/resize:fit:2000/1*Cknaaw2CUy8g1YpT0eVHEg.jpeg",
    route: "/allclasses/65663d61b75a711bc1fba2e6",
  },
  {
    id: 3,
    courseTitle: "Web Development Fundamentals",
    shortDescription:
      "Master the basics of web development with HTML, CSS, and JavaScript.",
    img: "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/62.png",
    route: "/allclasses/65656d80407d968934e1498e",
  },
];

const PopularCourses = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, md: 10 },
        background:
          "radial-gradient(circle at 12% 16%, rgba(217, 45, 32, 0.08), transparent 25rem), radial-gradient(circle at 88% 20%, rgba(23, 92, 211, 0.08), transparent 28rem), #f8f9fc",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: "auto",
            mb: { xs: 4, md: 5 },
            maxWidth: 780,
            textAlign: "center",
          }}
        >
          <Chip
            icon={<AutoAwesomeRoundedIcon />}
            label="Learner favorites"
            sx={{
              mb: 2,
              borderRadius: "999px",
              color: "#b42318",
              backgroundColor: "#fff5f4",
              border: "1px solid rgba(180, 35, 24, 0.12)",
              fontWeight: 800,
              "& .MuiChip-icon": {
                color: "#d92d20",
              },
            }}
          />
          <Title title="Our" titleColor="Popular Courses" />
          <Typography
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 720,
              color: "#667085",
              fontFamily: "'EB Garamond', serif",
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: 700,
              lineHeight: 1.85,
            }}
          >
            Discover excellence in education with top-rated EduPulse courses.
            These learner favorites combine practical skills, expert-led
            insights, and focused paths for building confidence faster.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            mx: "auto",
            maxWidth: 1040,
            borderRadius: { xs: "24px", md: "32px" },
            border: "1px solid rgba(16, 24, 40, 0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(246,248,252,0.96))",
            boxShadow: "0 28px 70px rgba(16, 24, 40, 0.10)",
            p: { xs: 1.25, sm: 1.5, md: 2 },
          }}
        >
          <Carousel
            autoPlay={false}
            animation="slide"
            duration={650}
            navButtonsAlwaysVisible
            navButtonsProps={{
              style: {
                width: 44,
                height: 44,
                borderRadius: 999,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#101828",
                boxShadow: "0 12px 28px rgba(16, 24, 40, 0.16)",
              },
            }}
            navButtonsWrapperProps={{
              style: {
                paddingLeft: 8,
                paddingRight: 8,
              },
            }}
            indicatorIconButtonProps={{
              style: {
                padding: 6,
                color: "#cbd5e1",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#d92d20",
              },
            }}
            indicatorContainerProps={{
              style: {
                marginTop: 18,
                textAlign: "center",
              },
            }}
          >
            {courses.map((course, index) => (
              <Items
                key={course.id}
                item={course}
                index={index}
                total={courses.length}
              />
            ))}
          </Carousel>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{
            mt: { xs: 3, md: 4 },
            alignItems: "center",
            justifyContent: "center",
            color: "#475467",
          }}
        >
          {["Expert-led lessons", "Practical projects", "Flexible learning"].map(
            (item) => (
              <Stack
                key={item}
                direction="row"
                spacing={0.8}
                sx={{ alignItems: "center" }}
              >
                <ArrowForwardRoundedIcon sx={{ color: "#d92d20", fontSize: 18 }} />
                <Typography sx={{ fontSize: "0.95rem", fontWeight: 800 }}>
                  {item}
                </Typography>
              </Stack>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default PopularCourses;
