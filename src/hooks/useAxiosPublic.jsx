import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://eduserver-three.vercel.app/'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic