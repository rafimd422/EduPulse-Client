// src/components/Title/Title.jsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from '../../styles/Title.module.css';

const Title = ({ title, titleColor }) => {
  return (
    <Grid className={styles.style}>
      <Typography align='center' variant="h3" className={styles.customTypography}>
        {title} <span style={{ color: '#800000' }}>{titleColor}</span>
      </Typography>
    </Grid>
  );
};

export default Title;
