// Dependencies
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
<<<<<<< HEAD

// Contexts
import {useAuth} from './contexts/AuthContext';
=======
>>>>>>> f3367dfbca520049a1c10a6b9f94d0798847afdc

// Context
import {useAuth} from '../contexts/AuthContext';

const PrivateRoute = ({component: RouteComponent}) => {
    const {currentUser} = useAuth();

    return (
        <Route>
            {currentUser ? 
                <RouteComponent />
            :
                <div>
                    {alert('You should be logged to enter in this section!')}
                     <Redirect to={'/login'} />
                </div>
            }
        </Route>
    );
};
export default PrivateRoute;
