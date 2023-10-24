import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase.config";

 
export const AuthContext = createContext(null);
export default function AuthProvider({children}) {

    const [loading , setLoading ]  = useState(true);
    const [user, setUser] = useState(null)
    const GoogleProvider = new GoogleAuthProvider();

    const userRegister = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const userLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth , email , password);
    }

    const userLogOut = ()=>{
        return signOut(auth)
    }
    const loginWithGoogle =()=>{
        return signInWithPopup(auth , GoogleProvider)
    }

    const upDate = (name, photoUrl)=>{
        return updateProfile(auth.currentUser, {
          displayName: name , photoURL: photoUrl
        })
      }

    useEffect(()=>{
        const currentUser =  onAuthStateChanged(auth , current =>{
            setUser(current); 
            setLoading(false)
        })
        return () =>{
          currentUser();
        }
      },[])
  
    const userInfo = {
        userRegister,
        userLogin,
        userLogOut,
        upDate,
        loginWithGoogle,
        loading,
        user
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}
