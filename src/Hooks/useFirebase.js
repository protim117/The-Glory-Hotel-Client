import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Components/Login/Firebase/Firebase.init";

// initializing authentication 
initAuth();

const useFirebase=()=>{
const[user,setUser]=useState({})
const[isLoading,setIsLoading]=useState(true);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

// Google SIgn in 
const googleSignIn=()=>{
    return signInWithPopup(auth, googleProvider)
}

// LogOut 
const logOut=()=>{
    setIsLoading(true);
signOut(auth).then(() => {
    setUser({})
  })
  .finally(()=> setIsLoading(false))

}


// Auth Changing observer 

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
        else{
          setUser({})
        }
        setIsLoading(false);
      });
},[])


return {
    user,isLoading,setIsLoading,googleSignIn,logOut,setUser
}

}

export default useFirebase;