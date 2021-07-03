// Dependencies
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = ({component: RouteComponent}) => {
    const log = useSelector(state => state.logReducer);

    return (
        <Route>
            {log ? 
                <RouteComponent />
            :
                <div>
                    {alert('You should be logged to enter in this section!')}
                    {/* sistemare testo */}
                    <Redirect to={'/login'} />
                </div>
            }
        </Route>
    );
};
export default PrivateRoute;