import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
import Lottie from "lottie-react";
import teacher from "../../assets/teacher/teacher.json";
import Title from "../Title/Title";
import { useRouter } from "next/navigation";

export default function Teacher() {

const router = useRouter()

  return (
    <Box>
      <Container maxWidth="lg" align="center">
        <Title title={"Are You A"} titleColor="Teacher?" />
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width={{ md: "46%" }}
            sx={{
              my: "1rem",
            }}
            style={{
              fontFamily: "EB Garamond",
            }}
          >
            <Lottie animationData={teacher} />
          </Box>
          <Box
            width={{ md: "46%" }}
            sx={{
              my: "1rem",
            }}
            style={{
              fontFamily: "EB Garamond",
            }}
          >
<Typography
  variant="h2"
  sx={{
    fontWeight: 700,
    fontSize: "2.2rem",
    color: "#414048",
  }}
>
  Become an Instructor
</Typography>

            <Typography
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
              Unlock the potential within you and make a lasting impact by
              becoming an instructor. Share your expertise, inspire learning,
              and contribute to a community of knowledge seekers. Join our
              mission to empower others through education and shape the future
              as a dedicated instructor.
            </Typography>
<Button
        onClick={()=> router.push('/teachonedupulse')}
              sx={{
                backgroundColor: "rgb(128, 0, 0)",
                color: "#fff",
                p: "12px",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgb(108, 8, 18)",
                },
              }}
              className="CheckButton"
            >
              Check it out!
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
