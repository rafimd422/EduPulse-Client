
import PageTitle from '@/components/PageTitle/PageTitle';
import { Box, Container, Typography } from '@mui/material';
import Toolbar  from '@mui/material/Toolbar';
import Title from './../../components/Title/Title';
import CourseCards from '@/components/AllCourses/CourseCards';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const AllClasses = () => {
const axiosSecure = useAxiosSecure()

  // const courses = [
  //   {
  //     instructorName: "John Doe",
  //     image: "instructor_image.jpg",
  //     courseTitle: "Introduction to Programming",
  //     courseImage: "course_image.jpg",
  //     price: 49.99,
  //     shortOverview: "Learn the basics of programming and start your journey into the world of coding.",
  //     longCourseDetails: "This course covers fundamental programming concepts such as variables, loops, and functions. It is suitable for beginners with no prior coding experience.",
  //     totalEnrollment: 500,
  //     enrollButton: "Enroll Now"
  //   },
  //   {
  //     instructorName: "Jane Smith",
  //     image: "instructor_image_2.jpg",
  //     courseTitle: "Web Development Bootcamp",
  //     courseImage: "https://res.cloudinary.com/boardinfinity/image/upload/t_blog_img/bi-websites/blog/11/62.png",
  //     price: 79.99,
  //     shortOverview: "Become a full-stack web developer with hands-on projects and real-world applications.",
  //     longCourseDetails: "Covering HTML, CSS, JavaScript, and popular frameworks like React and Node.js, this bootcamp is designed to equip you with the skills needed for modern web development.",
  //     totalEnrollment: 800,
  //     enrollButton: "Enroll Now"
  //   },
  //   {
  //     instructorName: "Alex Johnson",
  //     image: "instructor_image_3.jpg",
  //     courseTitle: "Data Science Essentials",
  //     courseImage: "https://miro.medium.com/v2/resize:fit:2000/1*Cknaaw2CUy8g1YpT0eVHEg.jpeg",
  //     price: 89.99,
  //     shortOverview: "Unlock the power of data with this comprehensive data science course.",
  //     longCourseDetails: "From data analysis to machine learning, this course covers the essential concepts and tools used in the field of data science. Gain practical experience with real-world projects.",
  //     totalEnrollment: 600,
  //     enrollButton: "Enroll Now"
  //   }
  // ];
  
  //classreq
  const {
    data: courses,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["CurrentUser"],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get("/classreq");
        return res.data;
      }
      return null;
    },
  });





  return (
    <>
    <PageTitle halmet={'All Courses'}/>
    <Toolbar />
<Box>
<Toolbar />
<Container maxWidth='lg' align='center'>
<Title title={'Discover Your'} titleColor={' Learning Path'} />
<Typography maxWidth={'sm'}
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
              {"Welcome to Edupulse, where learning knows no bounds. Explore our collection of courses designed to meet your educational needs. From programming to data science, we've got you covered."}
            </Typography>

<Toolbar />
<Toolbar sx={{align:'center', display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center'}} >
  {courses.map(course => <CourseCards key={course} course={course}  />)}
</Toolbar>
</Container>

</Box>
<Toolbar />



    </>
  )
}

export default AllClasses
