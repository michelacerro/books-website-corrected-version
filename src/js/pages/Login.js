// Style
import FormCSS from '../../css/components/Form.module.css';

// Dependecies
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// Contexts
import {useAuth} from '../contexts/AuthContext';

// Components 
import EmailItem from '../components/form/EmailItem';
import PasswordItem from '../components/form/PasswordItem';
import ShowPasswordItem from '../components/form/ShowPasswordItem';
import Button from '../components/Button';


const Login = () => {
    const {login} = useAuth();
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            await firebase.auth().setPersistence('session');
            await login(email.value, password.value);
            history.push('/search');
        } catch (error) {
            alert(`Failed to log in: ${error}`);
        }
    };

    return (
        <div className={FormCSS['general-container']}>
            <div className={FormCSS['title']}>Log In</div>
            <form className={FormCSS['form']} onSubmit={handleLogin}>
                <EmailItem />
                <PasswordItem />
                <ShowPasswordItem />
                <Button text='Log In' />
            </form>
            <Link to='/signup' className={FormCSS['link']}>Create an account</Link>
        </div>
    )
};
export default Login;