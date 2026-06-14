import { AuthContext } from "@/Provider/auth-provider";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

const axiosSecure = axios.create({
  baseURL: "https://eduserver-three.vercel.app",
});
const useAxiosSecure = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAxiosSecure must be used within AuthProvider");
  }

  const { logOut, setLoading } = authContext;

  axiosSecure.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error: AxiosError) => {
      const status = error?.response?.status;

      if (status === 401 || status === 403) {
        await logOut();
        setLoading(false);
        router.push("/auth/signin");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
