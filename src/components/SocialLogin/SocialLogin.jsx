import { AuthContext } from "@/Provider/auth-provider";
import { authFontStack } from "@/components/Auth/AuthShell";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
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
    <Button
      fullWidth
      variant="outlined"
      onClick={handleGoogleLogin}
      sx={{
        minHeight: 48,
        borderRadius: 2,
        borderColor: "#e2e8f0",
        bgcolor: "#fff",
        color: "#0f172a",
        fontFamily: authFontStack,
        fontWeight: 800,
        textTransform: "none",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.05)",
        "&:hover": {
          borderColor: "#cbd5e1",
          bgcolor: "#f8fafc",
          boxShadow: "0 16px 38px rgba(15, 23, 42, 0.08)",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          mr: 1.25,
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e2e8f0",
          color: "#2563eb",
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        G
      </Box>
      Continue with Google
    </Button>
  );
}
