import { Container, Grid, Paper } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Title from "./../../components/Title/Title";

const partnerIcons = [
  TwitterIcon,
  GoogleIcon,
  PinterestIcon,
  AppleIcon,
  LinkedInIcon,
];

const Trusted = () => {
  return (
    <Paper sx={{ my: "1rem" }} elevation={0}>
      <Title title="Partner With the" titleColor="Industry leaders" />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          my: "2.4rem",
        }}
      >
        {partnerIcons.map((Icon, index) => (
          <Grid
            key={index}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon sx={{ height: "100px", width: "80px" }} />
          </Grid>
        ))}
      </Container>
    </Paper>
  );
};

export default Trusted;
