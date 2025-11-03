import {
  Box,
  Container,
  Typography,
  Toolbar,
  TextField,
  MenuItem,
  Button,
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
    <Box sx={{ my: "2rem" }}>
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Title title={"Teach On"} titleColor={"Edupulse"} />
        <Typography
          maxWidth={"sm"}
          align="center"
          sx={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 700,
            fontSize: "1rem",
            my: "1rem",
            color: "#404440",
            transition: "all 0.4s ease 0s",
          }}
          variant="h3"
        >
          Join our community of educators and share your knowledge with learners
          around the world! We believe in providing opportunities for passionate
          individuals like you to make a difference through teaching.
        </Typography>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            marginTop: "2rem",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            defaultValue={user?.displayName || ""}
            variant="outlined"
            name="name"
            margin="normal"
            required
            InputProps={{ style: { color: "black" } }}
          />

          <TextField
            type="file"
            variant="outlined"
            margin="normal"
            name="image"
            required
          />

          <TextField
            select
            label="Experience"
            variant="outlined"
            margin="normal"
            required
            name="experience"
          >
            {experienceOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Title"
            variant="outlined"
            margin="normal"
            name="courseTitle"
            required
          />

          <TextField
            select
            label="Category"
            variant="outlined"
            margin="normal"
            name="category"
            required
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
          >
            disabled={mutation.isPending}
          </Button>
        </form>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default TeachOnEduPulse;
