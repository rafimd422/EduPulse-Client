import { Container } from "@mui/material";
import { Lottie } from 'lottie-react';
import loading from '../../assets/Loading/loading.json'

export default function Loading() {
  return (
    <Container sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Lottie animationData={loading} />
    </Container>
  )
}
