// Style
import ErrorCSS from '../../css/pages/Error.module.css';

// Dependecies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Button from '../components/Button';


const Error = () => {
    return (
        <div className={ErrorCSS['error-page']}>
            <div className={ErrorCSS['container']}>
                <div className={ErrorCSS['message']}>
                    <div className={ErrorCSS['number']}>404</div>
                    <div className={ErrorCSS['text']}>Page not found</div>
                </div>
                <Link to='/'><Button text='Return to Home' /></Link>
            </div>
        </div>
    );
};
export default Error;