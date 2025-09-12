import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";

import PageTitle from "@/components/PageTitle/PageTitle";
import Title from "@/components/Title/Title";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import SignIn from "../auth/signin";
import loading from "@/assets/Loading/loading.json";
import { useContext } from "react";
import { AuthContext } from "@/Provider/auth-provider";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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

const ClassDetails: React.FC = () => {
  const router = useRouter();
  const { user }: any = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const id = router.query.id as string;

  const { data: updateClass, isLoading } = useQuery<Course>({
    queryKey: ["courses", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classreq/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading || !updateClass) {
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

  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      <PageTitle halmet="Courses Details" />
      <Toolbar />
      <Title title="Course" titleColor="Details" />

      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: "1.4rem",
            textAlign: "center",
            lineHeight: "20px",
            color: "#ff8049",
            my: "1rem",
          }}
        >
          Turn Your Passion into an Artistic Profession
        </Typography>

        <Typography
          sx={{
            fontSize: "1.8rem",
            textAlign: "center",
            lineHeight: "1.4",
            color: "black",
            my: "2rem",
            fontWeight: "bold",
          }}
        >
          {updateClass.title}
        </Typography>

        {updateClass.image && (
          <Image
            src={updateClass.image}
            width={800}
            height={500}
            alt="Course Thumbnail"
            priority
            style={{
              display: "block",
              margin: "1rem auto",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            width: 800,
            maxWidth: "100%",
            margin: "0 auto",
            justifyContent: "flex-end",
          }}
        >
          <Link href={`/allclasses/payment/${updateClass._id}`} passHref>
            <Button variant="contained" color="success">
              Continue to Pay
            </Button>
          </Link>
        </Box>

        <Typography
          sx={{
            fontSize: "1.8rem",
            textAlign: "center",
            color: "black",
            mt: "3rem",
            mb: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Course Overview
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            lineHeight: "1.6",
            mb: "2rem",
          }}
        >
          {updateClass.shortDesc}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.8rem",
            textAlign: "center",
            color: "black",
            mt: "1rem",
            mb: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Course Outline
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "justify",
            p: "2rem",
            lineHeight: "1.6",
          }}
        >
          {updateClass.courseOutline}
        </Typography>
      </Container>
    </>
  );
};

export default ClassDetails;
