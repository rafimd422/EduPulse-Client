import { AuthContext } from "@/Provider/AuthProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useRouter } from "next/router";
import { useContext } from "react";
import GoogleButton from "react-google-button";
import swal from "sweetalert";

export default function SocialLogin() {
  const { googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic()


  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
  
        const userData = {
          email: result.user?.email,
          image: result.user?.photoURL,
          name: result.user?.displayName
        };
  
        axiosPublic.post('/user', userData)
          .then(res => {
            console.log(res.data);
            if (router.pathname !== "/auth/signup") {
              router.push(router.pathname);
            } else {
              router.push("/");
            }
            swal("Logged In!", "Successfully!", "success");
          })
          .catch(error => {
            swal("Error", error.message, "error");
          });
      })
      .catch(error => {
        swal("Error", error.message, "error");
      });
  };
  
  

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <GoogleButton onClick={handleGoogleLogin} style={{ width: "100%" }} />
    </div>
  );
}
