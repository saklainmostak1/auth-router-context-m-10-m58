import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firbase.init';

export const Authcontext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

const [user, setUser] = useState({displayName: 'Akash'})
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

    const authInfo = {user, createUser}

    return (
       <Authcontext.Provider value={authInfo}>
        {children}
       </Authcontext.Provider>
    );
};

export default UserContext;