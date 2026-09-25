import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleprovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //console.log(user,loading);
  const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }


  const updateUser = (updateData) =>{
    return updateProfile(auth.currentUser , updateData)
  }
  

  const signInWithGoogle = ()=>{
    return signInWithPopup(auth , googleprovider);
  }

const signInWithGithub = ()=>{
  return signInWithPopup(auth , githubProvider)
}
  const logOut = () =>{
     return  signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
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
    signIn,
    setLoading,
    loading,
    updateUser,
    signInWithGoogle,
    signInWithGithub 
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
