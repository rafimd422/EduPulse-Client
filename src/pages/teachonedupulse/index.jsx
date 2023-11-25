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

const categories = [
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
  "Data Science",
  "Mobile App Development",
];

const ExperienceOptions = ["Beginner", "Experienced", "Some Idea"];

export default function TeachOnEduPulse() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.experience.value);
  };

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
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            type="file"
            label="Your Image"
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
            {ExperienceOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Title"
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            select
            label="Category"
            variant="outlined"
            margin="normal"
            required
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Container>
      <Toolbar />
    </Box>
  );
}
