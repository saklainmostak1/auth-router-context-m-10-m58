import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firbase.init';

export const Authcontext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const googlrProvider = new GoogleAuthProvider()

const [user, setUser] = useState({displayName: 'Nayan'})
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const signInWithGoogle = () =>{
   return signInWithPopup(auth, googlrProvider)
}

    const logOut = () =>{
      return  signOut(auth)
    }

  useEffect(() =>{
 const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log('auth change', createUser)
    })
    return () =>{
        unsubscribe();
    }
  }, [])
    const authInfo = {user, createUser, signIn, logOut, signInWithGoogle}

    return (
       <Authcontext.Provider value={authInfo}>
        {children}
       </Authcontext.Provider>
    );
};

export default UserContext;