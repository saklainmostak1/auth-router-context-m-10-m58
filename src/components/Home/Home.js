import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../contexts/UserContext';

const Home = () => {
    const {user} = useContext(Authcontext)
    return (
        <div>
            {user ?
                <h2>This is home for {user.email} </h2>
                :
               <div>
                 <h2>sorry You are not log in please log in from</h2>
                <Link to='login'>Log in</Link>
               </div>
            }
        </div>
    );
};

export default Home;