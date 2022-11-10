import React, { createContext, useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Utilities/firebase.init";

export const AuthContext = createContext([]);
const auth = getAuth(app);

const UserContext = ({ children }) => {
  
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader]=useState(true);
  const [service, setService]=useState({})

  const createUserWithEmail = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInUsingGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const updateUsersProfile = (profile) => {
    setLoader(true)
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, [createUserWithEmail]);

  const authInfo = {
    createUserWithEmail,
    user,
    signInUser,
    updateUsersProfile,
    signInUsingGoogle,
    logOut,
    loader,
    service,
    setService,

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
