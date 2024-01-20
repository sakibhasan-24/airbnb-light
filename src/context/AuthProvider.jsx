import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import usePublicAxios from "../Hooks/usePublicAxios";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/Api/useAxiosSecure";

export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const useAxios = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userLogOut = async () => {
    const res = await useAxios.get("/logout");
    // console.log("logout", res);
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        setLoading(false);
        // console.log(currentUser);
        // const userInfo = { name: currentUser.name, email: currentUser.email };
        // useAxios.post("/jwt", userInfo).then((res) => {
        //   if (res.data.token) {
        // localStorage.setItem("token", res.data.token);
        // setLoading(false);
        //   }
        // });
      } else {
        // localStorage.removeItem("token");

        console.log("no current User");
      }
    });
    return () => unSubscribe();
  }, []);
  const authValue = {
    user,
    loading,
    createUser,
    googleLogIn,
    userLogIn,
    userLogOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
