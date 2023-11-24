import { Box, Container, Typography } from "@mui/material";
import Title from "./../../components/Title/Title";
import Carousel from "react-material-ui-carousel";
import Items from "./CarouselItems/Items";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      courseTitle: "Graphic Design Mastery",
      shortDescription:
        "Unleash your creativity with advanced graphic design techniques and tools.",
      img: "https://wemakepro.com/wp-content/uploads/2022/05/Graphics-Design-Mastery-1-1024x576.jpg",
    },
    {
      id: 2,
      courseTitle: "Data Science Essentials",
      shortDescription:
        "Explore the world of data science and analytics to make informed decisions.",
      img: "https://miro.medium.com/v2/resize:fit:2000/1*Cknaaw2CUy8g1YpT0eVHEg.jpeg",
    },
    {
      id: 3,
      courseTitle: "Web Development Fundamentals",
      shortDescription:
        "Master the basics of web development with HTML, CSS, and JavaScript.",
      img: "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/62.png",
    },
    // Add more courses as needed
  ];

  return (
    <Box>
      <Container maxWidth="lg" align="center" sx={{ mt: "2rem", mb: "2.4rem" }}>
        <Title title="Our" titleColor={"Popular Courses"} />
        <Typography
          width={"80%"}
          color={"#003366"}
          align="center"
          marginTop={".9rem"}
          marginBottom={".8rem"}
        >
          Discover excellence in education with our top-rated courses at
          Edupulse. From in-demand skills to expert-led insights, our popular
          courses are chosen by learners like you. Explore the most enrolled and
          highly reviewed options to fuel your learning journey. Elevate your
          expertise, join a community of passionate learners, and unlock new
          opportunities. Dive into our popular courses – where success meets
          education.
        </Typography>

        {/* caresoul */}
        <Carousel
          indicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "blue",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "red",
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "10px",
              textAlign: "center", // Center the indicators
            },
            indicators: {
              width: "100%",
              marginTop: "10px",
              textAlign: "center",
            },
            indicator: {
              cursor: "pointer",
              transition: "200ms",
              padding: 0,
              color: "#fff",
              "&:hover": {
                color: "#1f1f1f",
              },
              "&:active": {
                color: "#1f1f1f",
              },
            },
            indicatorIcon: {
              fontSize: "15px",
            },
            active: {
              color: "#fff",
            },
          }}
        >
          {courses.map((ele) => (
            <Items key={ele.id} item={ele} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default PopularCourses;
