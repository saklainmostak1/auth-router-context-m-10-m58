import React, { useContext } from 'react';
import { Authcontext } from '../../contexts/UserContext';

const Home = () => {
    const {user} = useContext(Authcontext)
    return (
        <div>
            {user ?
                <h2>This is home for {user.email} </h2>
                :
                <h2>sorry You are not log in</h2>
            }
        </div>
    );
};

export default Home;