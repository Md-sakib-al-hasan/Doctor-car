import {
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
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

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
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
  };

  return (
    <div>
      <Authcontext.Provider value={Authinfo}>{children}</Authcontext.Provider>
    </div>
  );
}
