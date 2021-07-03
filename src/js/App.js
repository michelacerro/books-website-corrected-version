// Style
import '../css/App.css'

// Dependencies
import React from 'react';
import {BrowserRouter as Browser, Route, Switch} from 'react-router-dom';

// Contexts
import {AuthProvider}  from './contexts/AuthContext';

// Components
import Header from './components/Header';

// Pages      
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Search from './pages/Search';
import Results from './pages/Results';
import BookDetails from './pages/BookDetails';
import Error from './pages/Error';

//
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <div className='app'>
            <Browser>
                <AuthProvider>
                    <div className='header'>
                        <Header />
                    </div>
                    <div className='pages'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/signup' component={Signup} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/logout' component={Logout} />
                            <PrivateRoute exact path='/search' component={Search} />
                            <Route exact path='/results/:results' component={Results} />
                            <Route exact path='/info/:id' component={BookDetails} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </AuthProvider>
            </Browser>
        </div>
    );
};
export default App;