import axios from "axios";
import type { AxiosInstance } from "axios";

const axiosPublic = axios.create({
  baseURL: "https://eduserver-three.vercel.app",
});

const useAxiosPublic = (): AxiosInstance => {
  return axiosPublic;
};

export default useAxiosPublic;
