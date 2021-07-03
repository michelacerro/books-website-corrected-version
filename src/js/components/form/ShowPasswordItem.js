// Style
import FormCSS from '../../../css/components/Form.module.css';

// Dependencies
import React from 'react';


const ShowPasswordItem = () => {
    const showPassword = () => {
        const p = document.getElementById("password");

        if (document.getElementById('password-confirm')) {
            const pc = document.getElementById('password-confirm');
            
            if (p.type === 'password' && pc.type === 'password') {
                p.type = 'text';
                pc.type = 'text';
            } else {
                p.type = 'password';
                pc.type = 'password';
            };
        } else {
            if (p.type === 'password') {
                p.type = 'text';
            } else {
                p.type = 'password';
            };
        };       
    };

    return (
        <div className={FormCSS['show']}>
            <input type='checkbox' onClick={showPassword} />
            <label>Show Password</label>
        </div>
    );
};
export default ShowPasswordItem;
