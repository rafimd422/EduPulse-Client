import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect } from "react"; // Import useEffect
import { AuthContext } from "@/Provider/auth-provider";

const useCurrentUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

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
      return null; // Or an appropriate default value if user is not available
    },
    enabled: !!user?.email, // Only enable the query when user.email is available
  });

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  return { currentUser, refetch, isLoading };
};

export default useCurrentUser;
