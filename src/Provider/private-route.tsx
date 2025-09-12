import { ReactNode, useContext } from "react";
import { AuthContext } from "./auth-provider";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Loading from "../assets/Loading/loading.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={Loading} />
      </Container>
    );
  }

  if (user !== null) {
    return children;
  } else {
    router.push("/auth/signin");
    return null;
  }
};

export default PrivateRoute;
