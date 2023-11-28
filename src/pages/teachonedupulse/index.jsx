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
import Lottie from "lottie-react";
import Loading from "../../assets/Loading/loading.json";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import swal from "sweetalert";



const TeachOnEduPulse = () => {
    const {user} = useContext(AuthContext)
const axiosSecure = useAxiosSecure()



    const mutation = useMutation({
      mutationFn: async (event) => {
          event.preventDefault();
          const form = event.target;
          const photo = form.image.files[0];
          const formData = new FormData();
          formData.append('image', photo);
    
          const res = await axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
              const imageUrl = res.data?.data?.display_url;

              const name = form.name.value;
              const experience = form.experience.value;
              const title = form.courseTitle.value;
              const category = form.category.value;

              const teacherData = { category, title, experience, image: imageUrl, name, status:'Pending',email: user?.email }

             axiosSecure.post('/teacherRequest',teacherData)
             .then(res => {
               console.log(res.data)
               if(res.data?.insertedId){
                swal("Good job!", "Your Requst Is Under Review", "success")
               }
             })

      },
    });
    
    if(mutation.isLoading){
        <Lottie animationData={Loading} />
    }


  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "Data Science",
    "Mobile App Development",
  ];
  
  const ExperienceOptions = ["Beginner", "Experienced", "Some Idea"];
  

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
  value={user?.displayName}
  name="name"
  variant="outlined"
  margin="normal"
  required
  disabled
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
            {ExperienceOptions.map((option,index) => (
              <MenuItem key={index} value={option}>
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
          
          <Button type="submit" variant="contained" disabled={mutation.isLoading}>
  {mutation.isLoading ? 'Submitting...' : 'Submit'}
</Button>

        </form>
      </Container>
      <Toolbar />
    </Box>
  );
}

export default TeachOnEduPulse;