import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../../styles/Title.module.css';

const Title = ({ title, titleColor }) => {
  return (
    <Box className={styles.style}>
      <Typography align='center' sx={{ color: 'red' }} variant="h3" className={styles.customTypography}>
        {title} <span style={{ color: '#800000' }}>{titleColor}</span>
      </Typography>
    </Box>
  );
};

export default Title;
