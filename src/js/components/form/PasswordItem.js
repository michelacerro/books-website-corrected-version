// Style
import FormCSS from '../../../css/components/Form.module.css';

// Icons
import {RiLockPasswordFill} from 'react-icons/ri';

// Dependecies
import React from 'react';


const PasswordItem = () => {
    return (
        <div className={FormCSS['label']}>
            <RiLockPasswordFill className={FormCSS['icon']} />
            <input 
                type='password'
                name='password'
                placeholder='Your password'
                className={FormCSS['input']} 
                id='password'
                autoComplete='new-password'
                required 
            />
        </div>
    );
};
export default PasswordItem;