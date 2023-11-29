import { AuthContext } from '@/Provider/AuthProvider';
import SignIn from '@/pages/auth/signin';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
  const router = useRouter()
  const { logOut, setLoading } = useContext(AuthContext) 


  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    console.log(token)
     console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    console.log(config.headers.authorization);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


axiosSecure.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      await logOut();
      setLoading(false)
      router.push('/auth/signin'); 
    }

    return Promise.reject(error);
  }
);



    return axiosSecure;
  }


export default useAxiosSecure