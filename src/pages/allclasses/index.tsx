import { FC } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Alert, Box, Container, Stack, Typography, Toolbar } from "@mui/material";
import Title from "@/components/Title/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import loading from "@/assets/Loading/loading.json";
import dynamic from "next/dynamic";
import CourseCards from "@/components/AllCourses/CourseCards";

export interface Course {
  _id: string;
  title: string;
  price: string | number;
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
  const axiosPublic = useAxiosPublic();

  const { data: coursesData, isLoading, isError } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classreq");
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
  ) ?? [];

  return (
    <>
      <PageTitle halmet="All Courses" />
      <Toolbar />
      <Box
        component="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          bgcolor: "#f8fafc",
          pb: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 8%, rgba(14, 165, 233, 0.12), transparent 28%), radial-gradient(circle at 88% 4%, rgba(128, 0, 0, 0.08), transparent 26%)",
            pointerEvents: "none",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", pt: { xs: 5, md: 8 } }}
        >
          <Box
            sx={{
              maxWidth: 760,
              mx: "auto",
              mb: { xs: 4.5, md: 6 },
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1.75,
                py: 0.75,
                mb: 2,
                borderRadius: 999,
                border: "1px solid rgba(128, 0, 0, 0.14)",
                bgcolor: "rgba(255, 255, 255, 0.86)",
                color: "#800000",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 13,
                fontWeight: 800,
                lineHeight: 1,
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
              }}
            >
              Course Library
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Title title="Discover Your" titleColor=" Learning Path" />
            </Box>

            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                color: "#475569",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.75,
              }}
            >
              Welcome to Edupulse, where learning knows no bounds. Explore
              practical courses designed for focused growth, flexible study, and
              career-ready skills.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                mt: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[
                `${approvedCourses.length} approved courses`,
                "Expert instructors",
                "Self-paced learning",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    minHeight: 42,
                    px: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #e2e8f0",
                    bgcolor: "#fff",
                    color: "#334155",
                    fontFamily:
                      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: 14,
                    fontWeight: 800,
                    boxShadow: "0 14px 35px rgba(15, 23, 42, 0.05)",
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Box>

          {isError ? (
            <Box
              sx={{
                maxWidth: 680,
                mx: "auto",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
              }}
            >
              <Alert severity="error">
                We could not load the class list right now. Please refresh the
                page or try again shortly.
              </Alert>
            </Box>
          ) : approvedCourses.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(3, minmax(0, 1fr))",
                },
                gap: { xs: 2.5, md: 3 },
                alignItems: "stretch",
              }}
            >
              {approvedCourses.map((course) => (
                <CourseCards key={course._id} course={course} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                maxWidth: 560,
                mx: "auto",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                border: "1px solid #e2e8f0",
                bgcolor: "#fff",
                textAlign: "center",
                boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
              }}
            >
              <Typography
                sx={{
                  color: "#0f172a",
                  fontFamily:
                    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: "1.1rem",
                  fontWeight: 800,
                }}
              >
                No approved courses available yet.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Toolbar />
    </>
  );
};

export default AllClasses;
