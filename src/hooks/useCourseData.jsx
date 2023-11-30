import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const useCourseData = (router) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: dataForPayment,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["dataForPayment"],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/classreq/${router?.query?.id}`);
        return res.data;
      }
      return null;
    },
    enabled: !!user?.email,
  });

  return { dataForPayment, refetch, isLoading };
};

export default useCourseData;
