import {
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../assets/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth/cordova";
export const Authcontext = createContext(null);
export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createuser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log(currentuser);
      setLoding(false);
    });
    return;
    unsubcribe();
  }, []);

  const Authinfo = {
    user,
    loding,
    createuser,
    signIn,
    logout,
  };

  return (
    <div>
      <Authcontext.Provider value={Authinfo}>{children}</Authcontext.Provider>
    </div>
  );
}
