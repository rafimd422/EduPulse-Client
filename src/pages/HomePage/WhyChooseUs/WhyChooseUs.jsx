import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Title from "./../../../components/Title/Title";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Diverse Class Offerings",
      description:
        "Explore a wide range of classes covering various skills and subjects. From programming to creative arts, we offer diverse learning opportunities for every student.",
    },
    {
      title: "Experienced Instructors",
      description:
        "Learn from industry experts and experienced instructors dedicated to your success. Our passionate teachers are committed to providing quality education and guidance.",
    },
    {
      title: "Personalized Learning Experience",
      description:
        "Enjoy a personalized learning journey tailored to your pace and preferences. Our platform adapts to your unique needs, ensuring an effective and enjoyable learning experience.",
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: "4rem" }}>
        <Title title={"Why"} titleColor={"Choose Us?"} />

        <Grid container spacing={2}>
          {whyChooseUsData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  height: "100%",
                  padding: "1rem",
                }}
              >
                <br />
                <Chip
                  color="error"
                  sx={{
                    mb: "6px",
                    "&:hover": {
                      boxShadow: "2px 4px 8px rgba(0, 4, 2, 0.1)",
                    },
                  }}
                  label={data.title}
                />

                <br />

                <Typography variant="p" sx={{ py: "1rem" }}>
                  {data.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
