import * as React from 'react';
import {Typography,CardActions,Card,CardMedia,CardContent, Button,Chip } from '@mui/material';


const CourseCards = ({course}) => {

// To DO: Dynamic Enrollment status
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={course.image}
        alt={course.title}
      />
      <CardContent sx={{ textAlign: 'start' }}>
        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }} color="text.secondary">
          {course.title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'start' }} color="text.secondary">
  By {course.teacher}
</Typography>

        <br />
        <Typography variant='body2' marginBottom='.4rem' color="text.secondary">
          <strong>Overview:</strong> {course.shortDesc}
        </Typography> 
        
        <Chip label={`${200} Students Enrolled`} color="success" variant="outlined" />

      </CardContent>
      
      <CardActions sx={{ justifyContent: 'flex-end', width: '100%' }} disableSpacing>
      <Button sx={{ backgroundColor: 'rgb(128, 0, 0)', color: 'white', p: 2, textAlign: 'end' }} className="CheckButton">
  Enroll Now!
</Button>

      </CardActions>
    </Card>

  );
}


export default CourseCards;