import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import swal from "sweetalert";
import auth from "@/config/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUSer = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
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
  
    const updateUserProfile = (name, photo) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        console.log("Updated SUccessfully");
        swal({
          title: "Good job!",
          text: "Registration Successfull",
          icon: "success",
        });
      });
    };
  


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log("current user", currentUser);
        });
        return unSubscribe;
      }, []);


      const authInfo = {
        user,
        loading,
        setLoading,
        createUSer,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
      };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
