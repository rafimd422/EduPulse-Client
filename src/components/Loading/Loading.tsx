import dynamic from "next/dynamic";
import loading from "../../assets/Loading/loading.json";
import { Container } from "@mui/material";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loading() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={loading} />
    </Container>
  );
}
