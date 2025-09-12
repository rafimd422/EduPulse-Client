import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Title.module.css";

interface TitleProps {
  title: string;
  titleColor?: string;
}

const Title: FC<TitleProps> = ({ title, titleColor }) => {
  return (
    <Box className={styles.style}>
      <Typography
        align="center"
        variant="h3"
        className={styles.customTypography}
        sx={{ color: "red" }}
      >
        {title}
        {titleColor && <span style={{ color: "#800000" }}>{titleColor}</span>}
      </Typography>
    </Box>
  );
};

export default Title;
