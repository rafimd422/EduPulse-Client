import { AuthContext } from "@/Provider/AuthProvider";
import { useContext } from "react";
import SignIn from "../auth/signin";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import Title from "./../../components/Title/Title";
import loading from "../../assets/Loading/loading.json";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ClassDetails = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: updateClass, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classreq/${router?.query?.id}`);
      return res.data;
    },
    enabled: !!router?.query?.id,
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

  if (user === null) {
    return <SignIn />;
  }
  return (
    <>
      <PageTitle halmet={"Courses Details"} />
      <Toolbar />
      <Toolbar />
      <Title title={"Course"} titleColor={"Details"} />
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
            lineHeight: "18px",
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
            priority={true}
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              display: "block",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
        )}

        <div
          style={{
            display: "flex",
            width: "800",
            justifyContent: "space-between",
          }}
        >
          <p></p>
          <Link href={`/allclasses/payment/${updateClass._id}`}>
            <Button variant="contained" color="success">
              Continue to Pay
            </Button>
          </Link>
        </div>
        <Typography
          sx={{
            fontSize: "1.8rem",
            textAlign: "center",
            lineHeight: "18px",
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
            lineHeight: "20px",
            mb: "2rem",
          }}
        >
          {updateClass.shortDesc}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.8rem",
            textAlign: "center",
            lineHeight: "18px",
            color: "black",
            mt: "1rem",
            mb: "8px",
            fontWeight: "bold",
          }}
        >
          Course Outline
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "justify",
            padding: "2rem",
            lineHeight: "20px",
            mt: "6px",
            mb: "1rem",
          }}
        >
          {updateClass.courseOutline}
        </Typography>
      </Container>
    </>
  );
};

export default ClassDetails;
