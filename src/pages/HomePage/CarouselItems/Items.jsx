import { Paper, Button } from '@mui/material';
import React from 'react';

const Items = ({ item }) => {
  return (
    <Paper elevation={0} style={{ position: 'relative', backgroundImage: `url(${item.img})`, backgroundSize: 'cover', minHeight: '500px' }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px', color: 'white', position: 'absolute', bottom: 2, left: 0, right: 0 }}>
        <h2>{item.courseTitle}</h2>
        <p>{item.shortDescription}</p>
        <Button sx={{backgroundColor:'rgb(128, 0, 0)', color:'white', p:'12px'}} className="CheckButton">
          Check it out!
        </Button>
      </div>
    </Paper>
  );
}

export default Items;
