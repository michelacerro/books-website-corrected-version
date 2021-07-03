// Style
import FormCSS from '../../css/components/Form.module.css';

// Dependencies
import React from 'react';
import {useHistory, Link} from 'react-router-dom';

// Contexts
import {useAuth} from '../contexts/AuthContext';

// Components 
import EmailItem from '../components/form/EmailItem';
import PasswordItem from '../components/form/PasswordItem';
import PasswordConfirmItem from '../components/form/PasswordConfirmItem';
import ShowPasswordItem from '../components/form/ShowPasswordItem';
import Button from '../components/Button';


const Signup = () => {
    const {signup} = useAuth();
    const history = useHistory();

    const handleSignup = async (e) => {
        e.preventDefault();
        const {email, password, passwordConfirm} = e.target.elements;
        if (password.value !== passwordConfirm.value) {
            return alert('Passwords do not match. Please, correct your passwords.');
        }
        try {
            await signup(email.value, password.value);
            history.push('/login');
        } catch (error) {
            alert(`Failed to create an account: ${error}`);
        };
    };

    return (
        <div className={FormCSS['general-container']}>
            <div className={FormCSS['title']}>Sign Up</div>
            <form className={FormCSS['form']} onSubmit={handleSignup}>
                <EmailItem />
                <PasswordItem />              
                <PasswordConfirmItem />
                <ShowPasswordItem />
                <Button text='Sign Up'/>
            </form>
            <Link to='/login' className={FormCSS['link']}>I am already member</Link>
        </div>
    );
};
export default Signup;