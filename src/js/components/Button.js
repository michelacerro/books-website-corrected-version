// Style
import ButtonCSS from '../../css/components/Button.module.css';

// Dependencies
import React from 'react';


const Button = (props) => {
    return(
        <button type='submit' className={ButtonCSS['button']}>{props.text}</button>
    );
};
export default Button;