import DashboardLayout from '@/DashboardLayout';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Container, Toolbar } from '@mui/material';
import Lottie from 'lottie-react';
import Head from 'next/head';
import loading from '../../../assets/Loading/loading.json';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';


const Profile = () => {
const {currentUser, refetch, isLoading } = useCurrentUser()


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

if (!currentUser || currentUser.length === 0) {
  
  return (
    <Container sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Lottie animationData={loading} />
      <Typography variant="h6">Error loading user profile. Please try again. Refreshing...</Typography>
    </Container>
  );
}

if(currentUser === null || currentUser?.length === 0){
  refetch()
}
const user = currentUser[0]
  return (
    <DashboardLayout>
        <Head>
    <title>Profile || EduPulse </title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <Toolbar />


 <Container>
 <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
           src={user?.image}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
           {user?.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
         {user?.role}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
           {user?.email} 
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
 </Container>

    </DashboardLayout>
  )
}

export default Profile








