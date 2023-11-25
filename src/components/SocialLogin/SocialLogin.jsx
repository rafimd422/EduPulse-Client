import { AuthContext } from "@/Provider/AuthProvider";
import { useRouter } from "next/router";
import { useContext } from "react";
import GoogleButton from "react-google-button";
import swal from "sweetalert";

export default function SocialLogin() {
  const { googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        if (router.pathname !== "/auth/signin") {
          router.push(router.pathname);
        } else {
          router.push("/");
        }
        swal("Logged In!", "Successfully!", "success");

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
