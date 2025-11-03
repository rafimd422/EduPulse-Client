import { ReactNode, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "@/config/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Swal from "sweetalert2";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setLoading: (value: boolean) => void;
  createUSer: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  googleSignIn: () => Promise<any>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  const createUSer = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = async (name: string, photo: string) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "No user is logged in.",
      });
      return;
    }

    try {
      await updateProfile(currentUser, { displayName: name, photoURL: photo });
      console.log("Updated Successfully");

      await Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "Registration Successful",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong while updating your profile.",
      });
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser !== null) {
        const email = { email: currentUser.email };
        axiosPublic.post("/jwt", email).then((res) => {
          localStorage.setItem("token", res.data?.token);
        });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
    return unSubscribe;
  }, [axiosPublic]);

  const authInfo: AuthContextType = {
    user,
    loading,
    setLoading,
    createUSer,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
