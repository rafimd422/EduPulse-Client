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
import Loading from "../../assets/Loading/loading.json";
import { useContext, FormEvent } from "react";
import { AuthContext } from "@/Provider/auth-provider";
import swal from "sweetalert";
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

  const mutation = useMutation({
    mutationFn: async (event: FormEvent<TeacherForm>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const photo = form.image.files[0];
      const formData = new FormData();
      formData.append("image", photo);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const imageUrl = res.data?.data?.display_url;

      const teacherData = {
        category: form.category.value as Category,
        title: form.courseTitle.value,
        experience: form.experience.value as Experience,
        image: imageUrl,
        name: form.name.value,
        status: "Pending",
        email: user?.email,
      };

      const response = await axiosSecure.post("/teacherRequest", teacherData);
      if (response.data?.insertedId) {
        swal("Good job!", "Your request is under review", "success");
      }
    },
  });

  if (user === null) {
    return <SignIn />;
  }

  return (
    <Box sx={{ my: "2rem" }}>
      <Toolbar />
      <Container maxWidth={"lg"} align="center">
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
          onSubmit={mutation.mutate}
        >
          <TextField
            defaultValue={user?.displayName || ""}
            variant="outlined"
            name="name"
            margin="normal"
            required
            InputProps={{
              style: {
                color: "black",
              },
            }}
          />

          <TextField
            type="file"
            variant="outlined"
            margin="normal"
            name="image"
            id="image"
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
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Container>
      <Toolbar />
    </Box>
  );
};

export default TeachOnEduPulse;
