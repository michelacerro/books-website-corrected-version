// Style
import FooterCSS from '../../css/components/Footer.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <div className={FooterCSS['footer']}>
            <div className={FooterCSS['container']}>
                <div className={FooterCSS['section']}>
                    <p>Do you already have an account?
                        <Link to={'/login'} className={FooterCSS['link']}>Log In</Link>
                    </p>
                </div>
                <div className={FooterCSS['section']}>
                    <p>Are you new here?
                        <Link to={'/signup'} className={FooterCSS['link']}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;