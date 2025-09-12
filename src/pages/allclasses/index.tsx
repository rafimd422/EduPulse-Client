import { FC } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Box, Container, Typography, Toolbar } from "@mui/material";
import Title from "@/components/Title/Title";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loading from "@/assets/Loading/loading.json";
import dynamic from "next/dynamic";
import CourseCards from "@/components/AllCourses/CourseCards";

export interface Course {
  _id: string;
  title: string;
  price: string;
  shortDesc: string;
  courseOutline: string;
  image: string;
  teacher: string;
  teacherMail: string;
  userImage: string;
  status: string;
  enrollCount: number;
}

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AllClasses: FC = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coursesData, isLoading } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classreq");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loading} />
      </Container>
    );
  }

  const approvedCourses = coursesData?.filter(
    (course) => course.status === "approved"
  );

  return (
    <>
      <PageTitle halmet="All Courses" />
      <Toolbar />
      <Box>
        <Toolbar />
        <Container maxWidth="lg">
          <Title title="Discover Your" titleColor=" Learning Path" />
          <Typography
            maxWidth="sm"
            align="center"
            sx={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 700,
              fontSize: "1rem",
              my: "1rem",
              color: "#414040",
              transition: "all 0.4s ease 0s",
            }}
            variant="h3"
          >
            {
              "Welcome to Edupulse, where learning knows no bounds. Explore our collection of courses designed to meet your educational needs. From programming to data science, we've got you covered."
            }
          </Typography>

          <Toolbar
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {approvedCourses?.map((course) => (
              <CourseCards key={course._id} course={course} />
            ))}
          </Toolbar>
        </Container>
      </Box>
      <Toolbar />
    </>
  );
};

export default AllClasses;
