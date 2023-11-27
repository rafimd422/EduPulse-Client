import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import { Container } from "@mui/material";
import Lottie from "lottie-react";
import loading from '.././assets/Loading/loading.json'

const userCurrentUser = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
const currentUserEmail = user.email;

  const {
    data: currentUser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["CurretnUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${currentUserEmail}`);
      return res.data;
    },
    onSuccess: () => {
      refetch();
    },
  });

  if (isLoading) {
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

  return { currentUser, refetch };
};

export default userCurrentUser
