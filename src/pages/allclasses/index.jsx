
import PageTitle from '@/components/PageTitle/PageTitle';
import { Box, Container, Typography } from '@mui/material';
import Toolbar  from '@mui/material/Toolbar';
import Title from './../../components/Title/Title';
import CourseCards from '@/components/AllCourses/CourseCards';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import loading from '../../assets/Loading/loading.json';

const AllClasses = () => {
const axiosSecure = useAxiosSecure()
  //classreq
  const {
    data: approvedClass,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
        const res = await axiosSecure.get("/classreq");
        return res.data;

    },
  });

if(isLoading){
  
  return  <Container sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Lottie animationData={loading} />
</Container>
}

const courses = approvedClass?.filter(ele => ele.status === 'approved')

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
<Toolbar sx={{ align: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center'}} >
  {courses?.map(course => <CourseCards key={course._id} course={course}  />)}
</Toolbar>
</Container>

</Box>
<Toolbar />



    </>
  )
}

export default AllClasses
