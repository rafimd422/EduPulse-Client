import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/Provider/auth-provider";

const useCurrentUser = () => {
  const axiosSecure = useAxiosSecure();
  const authContext = useContext(AuthContext);
  const user = authContext?.user;

  const {
    data: currentUser,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["CurrentUser"],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/user?email=${user.email}`);
        return res.data;
      }
      return null;
    },
    enabled: !!user?.email,
  });

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  return { currentUser, refetch, isLoading };
};

export default useCurrentUser;
