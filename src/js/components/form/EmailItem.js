// Style
import FormCSS from '../../../css/components/Form.module.css';

// Icons
import {MdEmail} from 'react-icons/md'

// Dependecies
import React from 'react';


const EmailItem = () => {
    return (
        <div className={FormCSS['label']}>
            <MdEmail className={FormCSS['icon']} />
            <input 
                type='email'
                name='email'
                placeholder='Your email'
                className={FormCSS['input']} 
                required 
            />
        </div>
    );
};
export default EmailItem;