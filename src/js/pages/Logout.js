// Style
import FormCSS from '../../css/components/Form.module.css';

// Dependencies
import React from 'react';

// Components
import LogoutButton from '../components/form/LogoutButton';


const Logout = () => {
    return (
        <div className={FormCSS['general-container']}>
            <div className={FormCSS['text']}>Do you have to go? <br/> Bye, come back soon!</div>
            <LogoutButton />    
        </div>
    )
};
export default Logout;