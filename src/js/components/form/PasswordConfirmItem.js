// Style
import FormCSS from '../../../css/components/Form.module.css';

// Icons
import {RiLockPasswordLine} from 'react-icons/ri';

// Dependecies
import React from 'react';


const PasswordConfirmItem = () => {
    return (
        <div className={FormCSS['label']}>
            <RiLockPasswordLine className={FormCSS['icon']} />
            <input 
                type='password'
                name='passwordConfirm'
                placeholder='Repeat your password'
                className={FormCSS['input']}
                id='password-confirm' 
                required
            />
        </div>
    );
};
export default PasswordConfirmItem;