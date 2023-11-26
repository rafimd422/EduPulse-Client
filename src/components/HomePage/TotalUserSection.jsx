import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Image from "next/legacy/image";
import Title from './../../components/Title/Title';


const TotalUserSection = () => {
  return (
    <Box sx={{my:'6rem'}}>
      <Container maxWidth='lg' align='center' >
        <Title title={'Platform'} titleColor={'Analytics'}/>
        <Typography color={'#708090'} maxWidth={'700px'} margin={'1rem'}>
        Get an in-depth look at our website's performance and impact. This section highlights user count, available classes, and student enrollment.
        </Typography>
        <Grid align='center'
          sx={{ display: "flex",flexWrap:'wrap', justifyContent:{sm:'center' ,lg:'space-between'},alignItems:'center' , mx: "4rem" }}
        >
  <div>
      <Card style={{ maxWidth: 300, margin: 16 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={{
                display: 'flex',
                justifyContent:'space-between',
                padding: 16,
                borderRadius: 8,
                backgroundColor: '#f5f5f5',  
                color: '#000',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 16,
                  color:'rgb(128, 0, 0)',
                  borderRadius: 8,
                  backgroundColor: '#2196f3',
                }}>
            <PersonOutlineIcon />
                </div>
                <div>
                  <Typography variant="h6">7500</Typography>
                  <Typography variant="body2" color="textSecondary" className="capitalize">Users</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{
                display: 'flex',
                justifyContent:'space-between',
                padding: 16,
                borderRadius: 8,
                backgroundColor: '#f5f5f5',  
                color: '#000',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 16,
                  color:'rgb(128, 0, 0)',
                  borderRadius: 8,
                  backgroundColor: '#2196f3',
                }}>
                <LocalLibraryIcon />
                </div>
                <div>
                  <Typography variant="h6">70</Typography>
                  <Typography variant="body2" color="textSecondary" className="capitalize">Courses</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{
                display: 'flex',
                justifyContent:'space-between',
                padding: 16,
                borderRadius: 8,
                backgroundColor: '#f5f5f5',  
                color: '#000',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 16,
                  color:'rgb(128, 0, 0)',
                  borderRadius: 8,
                  backgroundColor: '#2196f3',
                }}>
        <SubscriptionsIcon/>
                </div>
                <div>
                  <Typography variant="h6">7500</Typography>
                  <Typography variant="body2" color="textSecondary" className="capitalize">People Enrolled</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Repeat the above structure for other cards */}
    </div>


    <Box sx={{ width: '100%', maxWidth: 500, mt: 2 }}>
        <Image
          src="https://i.ibb.co/VjX2YrD/elisa-calvet-b-S3n-UOq-Dm-Uvc-unsplash.jpg"
          layout="responsive"
          width={300}
          height={200}
          alt="Picture of the author"
        />
      </Box>



        </Grid>
      </Container>
    </Box>
  );
};

export default TotalUserSection;
