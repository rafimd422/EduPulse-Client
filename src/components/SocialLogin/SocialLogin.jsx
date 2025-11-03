import { AuthContext } from "@/Provider/auth-provider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useRouter } from "next/router";
import { useContext } from "react";
import GoogleButton from "react-google-button";
import Swal from "sweetalert2";

export default function SocialLogin() {
  const { googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();

      const userData = {
        email: result.user?.email,
        image: result.user?.photoURL,
        name: result.user?.displayName,
        role: "student",
      };

      await axiosPublic.post("/user", userData);

      router.push("/");

      await Swal.fire({
        title: "Logged In!",
        text: "Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: error.message ?? "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <GoogleButton onClick={handleGoogleLogin} style={{ width: "100%" }} />
    </div>
  );
}
