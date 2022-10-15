import React, { useContext } from 'react';
import { Authcontext } from '../../contexts/UserContext';

const Home = () => {
    const {user} = useContext(Authcontext)
    return (
        <div>
            <h2>This is home for {user.displayName} </h2>
        </div>
    );
};

export default Home;