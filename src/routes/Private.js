import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../contexts/UserContext';

const Private = ({children}) => {
    const {user, loading} = useContext(Authcontext)

    if(loading){
        return <div>Loading ......</div>
    }
    if(user && user.uid){
        return children
    }
    return  <Navigate to='/login'></Navigate>
};

export default Private;