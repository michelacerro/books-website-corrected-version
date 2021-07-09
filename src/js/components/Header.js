// Style
import HeaderCSS from '../../css/components/Header.module.css';

// Dependecies
import React from 'react';
import {Link} from 'react-router-dom';

// Contexts
import {useAuth} from '../contexts/AuthContext';

// Components
import Navbar from './Navbar';
import Button from '../components/Button';
import LogoutButton from '../components/form/LogoutButton';


const Header = () => {
    const {currentUser} = useAuth();

    return (
        <div className={HeaderCSS['header']}>
            <div className={HeaderCSS['container']}>
                <Link to='/books-website-corrected-version' className={HeaderCSS['link']}>Bookland</Link>
                <div className={HeaderCSS['state']}>
                    {!currentUser ?
                            <Link to='/login'><Button text='Log In' /></Link>
                        :
                        <>
                            <div className={HeaderCSS['user']}>Hi, <strong>{currentUser.email}</strong>!</div>
                            <LogoutButton />
                        </>
                    }
                </div>
            </div>
            <Navbar />
        </div>
    );
};
export default Header;