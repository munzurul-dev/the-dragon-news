import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut = () =>{
     return  signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthData = {
    user,
    setUser,
    creatUser,
    logOut,
    signIn
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
