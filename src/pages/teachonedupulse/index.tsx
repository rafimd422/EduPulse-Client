import {
  Box,
  Container,
  Typography,
  Toolbar,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import Title from "./../../components/Title/Title";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext, FormEvent } from "react";
import { AuthContext } from "@/Provider/auth-provider";
import Swal from "sweetalert2";
import SignIn from "../auth/signin";
import dynamic from "next/dynamic";
import { User } from "firebase/auth";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const categories = [
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
  "Data Science",
  "Mobile App Development",
] as const;

const experienceOptions = ["Beginner", "Experienced", "Some Idea"] as const;

type Experience = (typeof experienceOptions)[number];
type Category = (typeof categories)[number];

interface TeacherFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  image: HTMLInputElement;
  experience: HTMLInputElement;
  courseTitle: HTMLInputElement;
  category: HTMLInputElement;
}

interface TeacherForm extends HTMLFormElement {
  readonly elements: TeacherFormElements;
}

const TeachOnEduPulse = () => {
  const { user } = useContext(AuthContext) as { user: User | null };
  const axiosSecure = useAxiosSecure();

  const fieldSx = {
    "& .MuiInputLabel-root": {
      color: "#475467",
      fontWeight: 700,
    },
    "& .MuiOutlinedInput-root": {
      minHeight: 58,
      borderRadius: "16px",
      backgroundColor: "#fbfcfe",
      transition: "all 0.25s ease",
      "& fieldset": {
        borderColor: "#d7deea",
      },
      "&:hover fieldset": {
        borderColor: "#b8c6db",
      },
      "&.Mui-focused": {
        backgroundColor: "#ffffff",
        boxShadow: "0 0 0 4px rgba(28, 100, 242, 0.08)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#d92d20",
      },
    },
    "& .MuiInputBase-input": {
      color: "#101828",
      fontWeight: 600,
      py: 1.9,
    },
  };

  // Correctly typed mutation
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return res.data?.data?.display_url as string;
    },
  });

  if (!user) return <SignIn />;

  const handleSubmit = async (event: FormEvent<TeacherForm>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const photoInput = form.elements.namedItem(
      "image"
    ) as HTMLInputElement | null;
    const photo = photoInput?.files?.[0];
    if (!photo) {
      await Swal.fire("Error", "Please upload a profile image.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", photo);

    // Upload image and get URL
    const imageUrl = await mutation.mutateAsync(formData);

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const experienceInput = form.elements.namedItem(
      "experience"
    ) as HTMLInputElement;
    const courseTitleInput = form.elements.namedItem(
      "courseTitle"
    ) as HTMLInputElement;
    const categoryInput = form.elements.namedItem(
      "category"
    ) as HTMLInputElement;

    const teacherData = {
      category: categoryInput.value as Category,
      title: courseTitleInput.value,
      experience: experienceInput.value as Experience,
      image: imageUrl,
      name: nameInput.value,
      status: "Pending",
      email: user?.email,
    };

    await axiosSecure.post("/teacherRequest", teacherData);

    await Swal.fire({
      title: "Good job!",
      text: "Your request is under review",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        background:
          "radial-gradient(circle at top, rgba(28, 100, 242, 0.08), transparent 26rem), radial-gradient(circle at bottom right, rgba(217, 45, 32, 0.08), transparent 24rem), #f6f7fb",
      }}
    >
      <Toolbar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Toolbar />
        <Title title={"Teach On"} titleColor={"Edupulse"} />
        <Typography
          maxWidth="680px"
          align="center"
          sx={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 700,
            fontSize: { xs: "1.02rem", md: "1.12rem" },
            lineHeight: 1.8,
            mt: 1.5,
            mb: { xs: 3, md: 4.5 },
            color: "#475467",
          }}
          variant="h3"
        >
          Join our community of educators and share your knowledge with learners
          around the world! We believe in providing opportunities for passionate
          individuals like you to make a difference through teaching.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 580,
            borderRadius: { xs: "24px", md: "30px" },
            border: "1px solid rgba(16, 24, 40, 0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,251,253,0.98))",
            boxShadow: "0 24px 60px rgba(16, 24, 40, 0.10)",
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            sx={{
              mb: 0.75,
              color: "#d92d20",
              fontSize: "0.78rem",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Instructor Application
          </Typography>
          <Typography
            sx={{
              mb: 3,
              color: "#667085",
              fontSize: "0.96rem",
              lineHeight: 1.7,
            }}
          >
            Complete the form below to submit your teaching request for review.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              defaultValue={user?.displayName || ""}
              variant="outlined"
              label="Full Name"
              name="name"
              required
              sx={fieldSx}
            />

            <Box>
              <Typography
                component="label"
                htmlFor="teacher-image"
                sx={{
                  mb: 0.9,
                  display: "block",
                  color: "#475467",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                }}
              >
                Profile Image *
              </Typography>
              <Box
                sx={{
                  borderRadius: "18px",
                  border: "1px solid #d7deea",
                  backgroundColor: "#fbfcfe",
                  px: 1.25,
                  py: 1.25,
                  transition: "all 0.25s ease",
                  "&:focus-within": {
                    borderColor: "#d92d20",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 0 4px rgba(28, 100, 242, 0.08)",
                  },
                }}
              >
                <Button
                  component="label"
                  variant="outlined"
                  sx={{
                    minHeight: 46,
                    borderRadius: "14px",
                    borderColor: "rgba(217, 45, 32, 0.18)",
                    color: "#d92d20",
                    backgroundColor: "#fff5f4",
                    px: 2,
                    textTransform: "none",
                    fontWeight: 800,
                    "&:hover": {
                      borderColor: "rgba(217, 45, 32, 0.3)",
                      backgroundColor: "#ffeceb",
                    },
                  }}
                >
                  Choose File
                  <input
                    id="teacher-image"
                    type="file"
                    name="image"
                    required
                    hidden
                  />
                </Button>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#667085",
                    fontSize: "0.84rem",
                    lineHeight: 1.6,
                  }}
                >
                  Upload a clear profile image for your instructor application.
                </Typography>
              </Box>
            </Box>

            <TextField
              select
              label="Experience"
              variant="outlined"
              required
              name="experience"
              sx={fieldSx}
            >
              {experienceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Course Title"
              variant="outlined"
              name="courseTitle"
              required
              sx={fieldSx}
            />

            <TextField
              select
              label="Category"
              variant="outlined"
              name="category"
              required
              sx={fieldSx}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              disabled={mutation.isPending}
              sx={{
                mt: 1,
                minHeight: 56,
                borderRadius: "16px",
                background: mutation.isPending
                  ? "linear-gradient(135deg, #d0d5dd, #eaecf0)"
                  : "linear-gradient(135deg, #d92d20, #1d4ed8)",
                color: mutation.isPending ? "#667085" : "#ffffff",
                textTransform: "none",
                fontSize: "0.98rem",
                fontWeight: 900,
                boxShadow: mutation.isPending
                  ? "none"
                  : "0 18px 32px rgba(29, 78, 216, 0.18)",
                cursor: mutation.isPending ? "not-allowed" : "pointer",
                "&:hover": {
                  background: mutation.isPending
                    ? "linear-gradient(135deg, #d0d5dd, #eaecf0)"
                    : "linear-gradient(135deg, #c81e1e, #1e40af)",
                  boxShadow: mutation.isPending
                    ? "none"
                    : "0 20px 38px rgba(29, 78, 216, 0.22)",
                },
                "&.Mui-disabled": {
                  color: "#667085",
                  background: "linear-gradient(135deg, #d0d5dd, #eaecf0)",
                  opacity: 0.95,
                },
              }}
            >
              {mutation.isPending ? "Submitting..." : "Submit for Review"}
            </Button>
          </Box>
        </Paper>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default TeachOnEduPulse;
