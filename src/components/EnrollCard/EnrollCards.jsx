import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, CardMedia, Chip } from '@mui/material';
import Link from 'next/link';


const EnrollCards = ({ courses }) => {

  return (
    <Card sx={{ maxWidth: 360, height: '500px' }}>
      <CardMedia
        component="img"
        height="194"
        image={courses?.coursethumbnall}
        alt={courses?.courseTitle}
      />
      <CardContent sx={{ textAlign: 'start' }}>
        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }} color="text.secondary">
          {courses?.courseTitle.slice(0,101)}...
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'start' }} color="text.secondary">
          By {courses?.teacher}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '.8rem', fontWeight: 'bold' }} color="text.secondary">
          Transaction Id: {courses?.transecitonId}
        </Typography> <br />
        <Typography variant="p" sx={{ fontSize: '1rem', fontWeight: '600' }} color="text.secondary">
          Amount: ${courses?.paidAmount}  
        </Typography>
        <Chip label="Paid" sx={{marginLeft:'8px'}} color="success" />
        <Typography variant="h6" sx={{ fontSize: '.8rem', fontWeight: 'bold' }} color="text.secondary">
          Transaction Id: {courses?.transecitonId}
        </Typography> 
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'flex-end', width: '100%' }} disableSpacing>
        <Link href={`/dashboard/student/enrollclass/${courses?._id}`}>
          <Button sx={{ backgroundColor: 'rgb(128, 0, 0)', color: 'white', p: 2, textAlign: 'end' }} className="CheckButton">
            Continue!
          </Button>
        </Link> 
      </CardActions>
    </Card>
  );
}

export default EnrollCards;
